import axios from "axios"
import { useState } from "react"

export default function Get() {
	let [data, setData] = useState({})
	let fields = Object.keys(data);
	function getData() {
		axios.get("https://dummyjson.com/products/1").then((response) => { setData(response.data); console.log(response.data) })
	}
	return (
		<>
			<button onClick={getData}>Get</button>
			<div className="dataTable">
				{fields.map((v, i) => {
					if (v !== "images") {
						return (
							<div className="data" key={i}>
								{v}:<span>{data[v]}</span>
							</div>
						)
					}
					else {
						return (
							<div className="data" key={i}>
								{v}:<div className="imgs" key={i}>
									{data[v].map((img, Ik) => {
										return (<div key={Ik}>
											{img}
										</div>)
									})}
								</div>
							</div>
						)
					}
				}
				)}
			</div>
		</>
	)
}