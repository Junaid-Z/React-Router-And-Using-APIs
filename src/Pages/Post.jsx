import axios from "axios";
import { useState } from "react";

export default function Post() {
	let [data, setData] = useState({});
	function postData() {
		axios.post("https://dummyjson.com/posts/add", {
			userId: 5,
			title: 'QWERTY'
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
			<div className="postResponse">
				<h1>
					Response
				</h1>
				{JSON.stringify(data)}
			</div>
			<button onClick={postData}>Post</button>
		</>
	)
}