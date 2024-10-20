import React, {useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/pokemonService";
import { useSelector , useDispatch } from "react-redux";
import { addToTeam, removeFromTeam } from "../features/team/teamSlice";
import PokemonCard from "../components/pokemonCard";
import "../styles/PokemonDetailPage.css"

const PokemonDetail = () => {
	const { name } = useParams();
  const [ pokemon , setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ seen , setSeen] = useState(false);
  const dispatch = useDispatch();
  const team = useSelector( ( state ) => state.team.members );
  const isInTeam = team.some( pokemonInTeam => pokemonInTeam == name )
  console.log(team)

  useEffect(() => {
    const getPokemonDetail = async () => {
      setLoading(true);
      try {
        const data = await fetchPokemonDetail( name );
        setPokemon(data);
      }
      
      catch (error) {
        console.error("Error fetching Pokemon Detail:", error);
      }

      finally {
        setLoading(false);
      }
    };
    getPokemonDetail();
  }, [ name ]);

  const handleToggleTeams = () => {
    if (isInTeam) {
      dispatch( removeFromTeam ( name ) )
      console.log("Team removed and updated");
    } else {
      dispatch( addToTeam ( name ) )
      console.log("Team added and updated");
    }
    console.log(team);
  };

  const handleMarkSeen = () => {
    setSeen(true);
    console.log("Seen");
  };


  if (loading) return <div>Loading...</div>;
  if (!pokemon) return <div>Pokemon not found!</div>;

  return (
    <div className="pokemon-detail-page">
      <PokemonCard
        pokemon={pokemon}
        isInTeam={isInTeam}
        onToggleTeam={handleToggleTeams}
        isSeen={seen}
        onMarkSeen={handleMarkSeen}
        showMarkSeenButton = {true}
      />
      { console.log(pokemon) }
    </div>
	)
}

export default PokemonDetail;