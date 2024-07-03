import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);



	return (
		<React.Fragment>
		

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							Projects Driving Innovation
						</div>

						<div className="subtitle projects-subtitle">
						"I've developed a diverse portfolio leveraging React for scalable UI solutions, Redux for robust state management, and HTML/CSS for elegant and responsive designs. JavaScript ties it all together, powering dynamic functionalities and seamless user interactions. Check out my GitHub for projects where these technologies converge to create impactful web experiences."
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
