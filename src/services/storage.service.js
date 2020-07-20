class StorageService {

	setAuthToken(authToken) {
		localStorage.setItem('authToken', authToken);
	}

	getAuthToken() {
		let authToken = localStorage.getItem('authToken');
		return authToken ? authToken : undefined;
  }
  
  clearAuthToken() {
		localStorage.removeItem('authToken');
	}

}
  
export default new StorageService();