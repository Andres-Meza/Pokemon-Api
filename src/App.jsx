import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { searchPokemon } from './services/pokemonService';
import NavBar from './components/NavBar';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import TeamPage from './pages/teamPage';
import SearchResultsPage from './pages/searchResultsPage';
import './App.css';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if ( searchTerm.trim() ) {
      const results = await searchPokemon( searchTerm)
      setSearchResults(results);
      window.history.pushState( {} , '' , '/search' );
    }
    console.log("Search term:", searchTerm);
  };

  return (
    <Router>
      <NavBar 
        links = {[
          { text: 'List', url: '/' },
          { text: 'Team', url: '/team' }
        ]}
        searchTerm = { searchTerm }
        onSearchTermChange = { handleSearchTermChange }
        onSearchSubmit = { handleSearchSubmit }
      />
      <Routes>
        <Route path='/' element={<PokemonListPage searchTerm = { searchTerm } />} />
        <Route path='/pokemon/:name' element = { <PokemonDetailPage /> } />
        <Route path='/team' element = { <TeamPage searchTerm = { searchTerm } />} />
        <Route path='/search' element = { <SearchResultsPage searchResults = { searchResults } /> } />
      </Routes>
    </Router>
  );
}

export default App;
