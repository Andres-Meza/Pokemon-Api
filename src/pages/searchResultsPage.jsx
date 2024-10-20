import React from "react";
import { Link } from "react-router-dom";

const SearchResultsPage = ( { results } ) => {
	return (
    <div>
      <h1>Search Results</h1>
			{ results.length === 0 ? (
				<p>No Pokémon found. Try a different search term.</p>
      ) : (
        <ul className = "pokemonList">
					{results.map(( pokemon , index ) => (
            <li key = { index } className="pokemonListItem">
              <Link to={`/pokemon/${ pokemon.name }}`}>
								<img src={ pokemon.image } alt={ pokemon.name } className="pokemonImage"/>
								<span>{ pokemon.name }</span>
							</Link>
            </li>
          ))}
				</ul>
			)}
    </div>
  );
}

export default SearchResultsPage;