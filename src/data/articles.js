import React from "react";

function article_1() {
	return {
		date: "1 Jan 2024",
		title: "The Benefits of HTML, CSS, and JavaScript",
		description:
			"HTML, CSS, and JavaScript form the core technologies of web development, offering versatility, interactivity, and the ability to create engaging user interfaces. Explore why these technologies are essential for building modern web applications.",
		keywords: [
			"HTML",
			"CSS",
			"JavaScript",
			"Web Development",
			"Frontend Technologies",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
	
				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						HTML, CSS, and JavaScript form the core technologies of
						web development, offering versatility, interactivity,
						and the ability to create engaging user interfaces.
						Explore why these technologies are essential for
						building modern web applications.
					</div>
					<img
						src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png"
						alt="HTML logo"
						className="randImage"
						style={{
							width: "150px",
							height: "auto",
							margin: "40px",
						}} // Adjust width and maintain aspect ratio
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "1 Jan 2024",
		title: "React-Redux Architecture and Its Benefits",
		description:
			"Redux architecture offers a range of benefits, including predictable state management, centralized data storage, and easier debugging. Find out why more developers are turning to Redux for managing complex applications.",
		style: ``,
		keywords: [
			"React-Redux Architecture",
			"State Management",
			"Frontend Development",
			"rushi.ghatol1227@gmail.com",
		],
		body: (
			<React.Fragment>
				<h1>Benefits of React-Redux Architecture</h1>
				<p>
					Redux architecture provides a predictable state management
					solution that helps developers maintain and debug their
					applications more efficiently. By centralizing data storage,
					Redux makes it easier to manage the state of the entire
					application in a single place, reducing complexity and
					improving maintainability. The unidirectional data flow in
					Redux also simplifies the process of tracking changes and
					ensuring consistent state updates across the application.
				</p>
				<p>
					React-Redux integration further enhances the development
					experience by providing seamless state management within
					React components. This integration allows developers to
					leverage the strengths of both React and Redux, creating
					scalable and maintainable applications with a clear
					separation of concerns.
				</p>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
