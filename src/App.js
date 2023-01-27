import './App.css';
import { Routes, Route } from 'react-router-dom'
import StarshipList from './pages/StarshipList';
import Starship from './components/StarshipPage';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<StarshipList />}/>
      <Route path="/starship" element={<Starship />}/>
    </Routes>
    </>
  );
}

export default App;
