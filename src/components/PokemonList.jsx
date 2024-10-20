import React from "react";
import { Link } from "react-router-dom";
import '../styles/PokemonList.css';
import '../styles/Common.css';

const PokemonList = ({ pokemons, currentPage, totalPages, onPageChange }) => {
	return (
		<>
			<ul className="pokemon-list">
				{pokemons.map((pokemon, index) => (
					<li key={index} className="pokemon-list-item">
						<Link to={`/pokemon/${pokemon.name}`} className="pokemon-link">
							<img src={pokemon.image} alt={pokemon.name} className="pokemon-image" />
							<span>{pokemon.name}</span>
						</Link>
					</li>
				))}
			</ul>
      
			<div className="pagination-container">
				<button 
					className="button" 
					onClick={() => onPageChange(currentPage - 1)} 
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<span>{currentPage} / {totalPages}</span>
				<button 
					className="button" 
					onClick={() => onPageChange(currentPage + 1)} 
					disabled={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</>
	);
};

export default PokemonList;