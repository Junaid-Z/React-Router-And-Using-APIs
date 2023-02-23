import axios from "axios";
import { useState } from "react";

export default function Patch() {
	let [data, setData] = useState({});
	function postData() {
		axios.patch("https://dummyjson.com/posts/1", {
			title: 'I think I should shift to the moon',
		})
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
			<button onClick={postData}>Post</button>
		</>
	)
}