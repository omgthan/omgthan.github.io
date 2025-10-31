import './Styles/Projects.css'
import HeaderNode from "../Components/Header"
import ProjectListItems from '../Components/ProjectListItems';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function Projects() {
	return (
		<>
			<HeaderNode />
			<div id="projects-display-wrapper">
				<div id="projects-list" className="wrapper">
					<ProjectListItems/>
				</div>
				<div id="projects-info" className="wrapper">

				</div>
			</div>
		</>
	);
}

export default Projects