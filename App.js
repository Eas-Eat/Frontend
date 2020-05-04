import React, { useState, useEffect } from "react";
import RootNavigator from "./src/navigator";
import SafeAreaView from "react-native-safe-area-view";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Provider as PaperProvider } from "react-native-paper";
import * as Font from "expo-font";

console.disableYellowBox = true;

export default function app() {
	const [loading, setLoading] = useState(true);
	const client = new ApolloClient({ uri: "http://easeat-development.herokuapp.com/" });

	useEffect(() => {
		componentWillMount();
	}, []);

	const componentWillMount = async () => {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		});
		setLoading(false);
	};

	const render = () => {
		return loading ? null : (
			<ApolloProvider client={client}>
				<PaperProvider>
					<SafeAreaView style={{ flex: 1, backgroundColor: "#191919" }} forceInset={{ top: "always" }}>
						<RootNavigator />
					</SafeAreaView>
				</PaperProvider>
			</ApolloProvider>
		);
	};

	return render();
}
