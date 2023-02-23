import axios from "axios";
import { useState } from "react";

export default function Delete() {
	let [data, setData] = useState({});
	function deleteData() {
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
			<button onClick={deleteData}>Post</button>
		</>
	)
}