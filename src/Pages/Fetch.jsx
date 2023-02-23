import axios from "axios";
import { useState } from "react";

export default function Fetch() {
	let [data, setData] = useState({});
	function fetchData() {
		axios.delete("https://dummyjson.com/posts/2")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			})
	}
	return (
		<>
			<div className="patchResponse">
				<h1>
					Response
				</h1>
				{JSON.stringify(data)}
			</div>
			<button onClick={fetchData}>Post</button>
		</>
	)
}