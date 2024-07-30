import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { HomePage } from './pages/HomePage/HomePage';
import { MoviesPage } from './pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="*" element={<h1>Oh... this page doesn't exist!</h1>} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
