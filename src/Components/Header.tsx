import './Styles/Header.css';
import { Link } from "react-router-dom";

function HeaderNode() {
	return (
		<>
			<div id="header" className="wrapper">
				<h1><Link to="/">Ethan Dirkes</Link></h1>
				<Link to="/about">About</Link>
				<Link to="/projects">Projects</Link>
			</div>
		</>
	)
}

export default HeaderNode