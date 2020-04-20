import { useState } from "react";

export default function useInput(initialState = "") {
	const [value, setValue] = useState(initialState);

	return {
		value,
		onChangeText(e) {
			setValue(e);
		},
	};
}
