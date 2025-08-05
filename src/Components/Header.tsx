import './Styles/Header.css';
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<div>
				<h1><Link to="/">Ethan Dirkes</Link></h1>
				<table>
					<tr>
						<td>
							<Link to="/about">About</Link>
						</td>
						<td>
							<Link to="/projects">Projects</Link>
						</td>
					</tr>
				</table>
			</div>
		</>
	)
}

export default Header