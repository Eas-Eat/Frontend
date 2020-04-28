import { gql } from "apollo-boost";

export const signup = gql`
	mutation register($email: String!, $password: String!, $name: String!) {
		register(email: $email, password: $password, name: $name) {
			id
		}
	}
`;

export const signin = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password)
	}
`;

export const addFood = gql`
	mutation addFood($userId: String!, $foodId: String!) {
		addFood(userId: $userId, foodId: $foodId) {
			foodId
			userId
		}
	}
`;

export const removeFood = gql`
	mutation removeFood($userId: String!, $foodId: String!) {
		removeFood(userId: $userId, foodId: $foodId) {
			foodId
			userId
		}
	}
`;

export const clearInventory = gql`
	mutation cleanInventory($userId: String!) {
		cleanInventory(userId: $userId) {
			userId
		}
	}
`;
