import React from "react";
import "./Footer.css";

function Footer() {
	const date = new Date();
	const currentYear = date.getFullYear();

	return (
		<section>
			<div className="footer">
				<p>&copy; {currentYear} Made by Maxime Loustau-Lalanne</p>
			</div>
		</section>
	);
}

export default Footer;
