import React , { useState , useEffect } from "react";
import PokemonList from "../components/PokemonList";
import { fetchPokemons } from "../services/pokemonService";

const PokemonListPage = ({ searchTerm }) => {

	const [ pokemons , setPokemons ] = useState([]);
	const [ currentPage , setCurrentPage ] = useState(1);
	const [ totalPages , setTotalPages ] = useState(0);
	const [ loading , setLoading ] = useState( true );
	const itemsPerpage = 20;

	useEffect(() => {

		const getPokemons = async () => {
			
			setLoading( true );

			try {
				const data = await fetchPokemons ( currentPage , itemsPerpage );
				setPokemons( data.results );
				setTotalPages( Math.ceil ( data.count / itemsPerpage ));
			} catch (error) {
				console.error("Error fetching pokemons: ", error)
				setPokemons([])
			}finally{
				setLoading( false );
			}
		};
    getPokemons();
	}, [ currentPage ]);

	const filteredPokemons = pokemons.filter ( pokemon => pokemon.name.toLowerCase().includes( searchTerm.toLowerCase() ));

	if (loading) {
		return <div>Loading...</div>;
	}
	
	return (
		<div>
			<h1>Pokémon List</h1>
				<PokemonList
					pokemons = { filteredPokemons }
					currentPage = { currentPage }
					totalPages = { totalPages }
					onPageChange = { setCurrentPage }
				/>
		</div>
	);
};

export default PokemonListPage;
