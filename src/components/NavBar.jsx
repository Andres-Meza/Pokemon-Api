import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = ({ links, searchTerm, onSearchTermChange, onSearchSubmit }) => {
	return (
		<nav className="nav-bar">
			<ul className="nav-list">
				{links.map((link, index) => (
					<li key={index}>
						<Link className="nav-link" to={link.url}>{link.text}</Link>
					</li>
				))}
			</ul>
			<form className="search-form" onSubmit={onSearchSubmit}>
				<input 
					className="search-input"
					type="text"
					value={searchTerm}
					onChange={onSearchTermChange}
					placeholder="Search Pokémon..."
				/>
				<button className="button" type="submit">Search</button>
			</form>
		</nav>
	);
};

export default NavBar;