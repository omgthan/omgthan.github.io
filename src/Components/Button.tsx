import './Styles/Button.css'
import { Link } from "react-router-dom";

interface Props {
	label: string;
	dest: string
}

function Button({ label, dest }: Props) {
	return (
		<Link to={dest}>
			<button>{label}</button>
		</Link>
	);
}

export default Button;