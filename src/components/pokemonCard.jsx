import React from "react";
import "../styles/PokemonCard.css"

const PokemonCard = ({ pokemon, isInTeam, onToggleTeam, isSeen, onMarkSeen, showMarkSeenButton = true }) => {
	return (
		<div className={`pokemon-card ${isSeen ? "seen" : ""}`}>
			<h2>{pokemon.name}</h2>
			<img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`} />
			<p>Type: {pokemon.types.map((type) => type.type.name).join(" - ")}</p>
			<p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(" - ")}</p>
			<p>Height: {pokemon.height}</p>
			<p>Weight: {pokemon.weight}</p>
			<div className="button-container"> 
				<button onClick={onToggleTeam}>
					{isInTeam ? "Remove from Team" : "Add to Team"}
				</button>
				{showMarkSeenButton && (
					<button onClick={onMarkSeen}>
						{isSeen ? "Seen" : "Mark as Seen"}
					</button>
				)}
			</div>
		</div>
	)
}

export default PokemonCard;
