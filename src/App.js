import './App.css';
import Main from './Main';
import DetailPage from './details';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Movie from './components/Movie';
import { dummy } from './movieDummy';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route path="/detail/:id" element={<DetailPage />}/>
      </Routes>
  );
}

export default App;