import React, { useEffect , useState } from "react";
import { fetchPokemonDetail } from "../services/pokemonService";
import { useSelector , useDispatch } from "react-redux";
import { removeFromTeam } from "../features/team/teamSlice";
import PokemonCard from "../components/pokemonCard";
import '../styles/TeamPage.css';

const TeamPage = ( { searchTerm = '' } ) => {
  const team = useSelector((state) => state.team.members);
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTeamDetails = async () => {
      setLoading(true);
      try {
        if ( team.length > 0 ) {
          const promises = team.map(( name ) => fetchPokemonDetail( name ));
          const details = await Promise.all(promises);
          setPokemonDetails( details );
        } else {
          setPokemonDetails([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTeamDetails();
  }, [team]);

  const handleRemoveFromTeam = (name) => {
    dispatch(removeFromTeam(name));
    console.log(`Removed ${name} from team`);
  };

  const filteredPokemonDetails = searchTerm
  ? pokemonDetails.filter( pokemon =>
      pokemon.name.toLowerCase().includes( searchTerm.toLowerCase() )
    )
  : pokemonDetails;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1 className="team-title">Your Pokémon Team</h1>
      {filteredPokemonDetails.length === 0 ? (
        <p className="team-title">No Pokémon in your team!</p>
      ) : (
        <div>
          {filteredPokemonDetails.map((pokemon, index) => (
            <PokemonCard
              key={index}
              pokemon={pokemon}
              isInTeam={true}
              onToggleTeam={() => handleRemoveFromTeam(pokemon.name)}
              showMarkSeenButton = { false } 
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TeamPage;