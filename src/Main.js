import './App.css';
import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Movie from './components/Movie';
import { dummy } from './movieDummy';

function Main() {
  return (
    <MainWrap>
      <h1>MOVIES NOW?!</h1>
      <div className='app-container'>{
        dummy.results.map((item)=>{
          return(
            <Movie 
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average = {item.vote_average}
            />
          )
        })
      }     
      </div>
    </MainWrap>
  );
}

export default Main;

const MainWrap = styled.div`
  color: black;
  text-align: center;
  h1{

  }
  .app-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: white;
  }
  .movie-container {
    width: 250px;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px gray;
    margin: 10px;
  }
  .movie-container img{
    max-width: 100%;
    border-radius: 10px;
  }
`
