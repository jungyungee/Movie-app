import './App.css';
import React from "react";
import { Routes, Route, Link, useNavigate, Outlet,useParams } from 'react-router-dom';
import styled from 'styled-components';
import Details from './components/Details';
import { dummy } from './movieDummy';

function Detail(item){
    return(
        <DetailWrap>
            <div className='app-container'>{
                <Details 
                    title = {item.title}
                    poster_path = {item.poster_path}
                    vote_average = {item.vote_average}
                />
            }
            </div>
        </DetailWrap>
    )
  }

  export default Detail;

  const DetailWrap = styled.div`
  `