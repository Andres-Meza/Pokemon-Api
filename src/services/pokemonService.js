export const fetchPokemons = async (page = 1, limit = 20) => {

	const offset = (page - 1) * limit;

	try {

		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();

		const pokemonsWithImages = await Promise.all(data.results.map(async (pokemon) => {

			const detailResponse = await fetch(pokemon.url);
			const detailData = await detailResponse.json();

			return {
				...pokemon,
				image: detailData.sprites.front_default
			};

		}));

		return {
			...data,
			results: pokemonsWithImages
		};

	} catch (error) {
		console.error("Error fetching pokemons:", error);
		return { results: [], count: 0 };
	}
};

export const fetchPokemonDetail = async (name) => {

	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;

	} catch (error) {
		console.error("Error fetching pokemon detail:", error);
		throw error;
	}
};

export const searchPokemon = async (searchTerm) => {
	try {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);

		if (response.ok) {

			const data = await response.json();

			return [{
				name: data.name,
				image: data.sprites.front_default,
				url: `https://pokeapi.co/api/v2/pokemon/${data.name}`
			}];
		}

		const allPokemonResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
		const allPokemonData = await allPokemonResponse.json();
		const matchingPokemons = allPokemonData.results.filter(pokemon =>
			pokemon.name.includes(searchTerm.toLowerCase())
		);

		const detailedPokemons = await Promise.all(matchingPokemons.map(async (pokemon) => {
			const detailResponse = await fetch(pokemon.url);
			const detailData = await detailResponse.json();

			return {
				name: pokemon.name,
				image: detailData.sprites.front_default,
				url: pokemon.url
			};
		}));
		return detailedPokemons;

	} catch (error) {
		console.error("Error searching pokemon:", error);
		return [];
	}
};