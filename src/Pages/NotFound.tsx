import { Link } from "react-router-dom";
import './Styles/NotFound.css'

function NotFound() {
	return (
		<>
			<div className="centered">
				<h1>Page Not Found</h1>
				<p>
					This page doesn't exist! Click <Link to="/">here</Link> to
					return to the home page.
				</p>
			</div>
		</>
	);
}

export default NotFound;