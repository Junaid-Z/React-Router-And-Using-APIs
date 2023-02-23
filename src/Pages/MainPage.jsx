import { Link, Outlet } from "react-router-dom"
export default function MainPage() {
	return (<div className="container">
		<header>
			<div className="link">
				<Link to={"get"} className="link">Get</Link>
			</div>
			<div className="link">
				<Link to={"post"} className="link">Post</Link>
			</div>
			<div className="link">
				<Link to={"fetch"} className="link">Fetch</Link>
			</div>
			<div className="link">
				<Link to={"patch"} className="link">Patch</Link>
			</div>
			<div className="link">
				<Link to={"delete"} className="link">Delete</Link>
			</div>
		</header>
		<main>
			<Outlet />
		</main>
	</div>)
}