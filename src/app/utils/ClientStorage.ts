class ClientStorage {
	static setToken(token: string) {
		localStorage.setItem("token", token);
	}

	static getToken() {
		const token = localStorage.getItem("token");
		return token || null;
	}
}

export default ClientStorage;
