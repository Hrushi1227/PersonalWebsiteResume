import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={`${process.env.PUBLIC_URL}/amdocsNew.png`}
								alt="Amdocs"
								className="work-image"
							/>
							<div className="work-title">Amdocs</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						<div className="work">
								<img
									src={`${process.env.PUBLIC_URL}/amdocsNew.png`}
									alt="Amdocs"
									className="work-image"
								/>
							<div className="work-title">Amdocs</div>
							<div className="work-subtitle">
									Software Developer
							</div>
							<div className="work-duration">2021 - 2022</div>
						</div>

						<div className="work">
								<img
									src={`${process.env.PUBLIC_URL}/amdocsNew.png`}
									alt="Amdocs"
									className="work-image"
								/>
							<div className="work-title">Amdocs</div>
							<div className="work-subtitle">
								Associate Software Engineer
							</div>
							<div className="work-duration">2018 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
