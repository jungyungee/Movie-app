import React from "react";
import { Link } from 'react-router-dom';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Details({title, original_title, overview, poster_path, vote_average}){
    return(
        <div className="details-container">
            <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
            <div className="movie-info">
                <h4>{title}</h4>
                <div>{overview}</div>
                <span>⭐️{vote_average}</span>
            </div>
        </div>
    )
}