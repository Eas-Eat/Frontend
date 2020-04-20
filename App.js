import React, { useState, useEffect } from "react";
import RootNavigator from "./src/navigator";
import SafeAreaView from "react-native-safe-area-view";
import * as Font from "expo-font";

export default function app() {
	const [loading, setLoading] = useState(true);

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
			<SafeAreaView style={{ flex: 1, backgroundColor: "#191919" }} forceInset={{ top: "always" }}>
				<RootNavigator />
			</SafeAreaView>
		);
	};

	return render();
}
