import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import Delete from "../Pages/Delete";
import Get from "../Pages/Get";
import Patch from "../Pages/Patch";
import Post from "../Pages/Post";
import Fetch from "../Pages/Fetch";
export default function MyRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} >
					<Route path="Get" element={<Get />} />
					<Route path="Patch" element={<Patch />} />
					<Route path="Post" element={<Post />} />
					<Route path="fetch" element={<Fetch />} />
					<Route path="Delete" element={<Delete />} />
				</Route>
				<Route path="*" element={<h1>Error Page</h1>} />
			</Routes>
		</BrowserRouter>
	)
}