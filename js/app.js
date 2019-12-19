async function API(url) {
	const baseUrl = "https://jsonplaceholder.typicode.com/";
	const response = await fetch(baseUrl + url);
	const data = await response.json();
	return data;
}

API("users").then(console.log);