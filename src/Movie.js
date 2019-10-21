import React from 'react';
import ProtoTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
import './Movie.css';

function Movie(props) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={props.poster} alt={props.title}/>
            </div>
            <div className="Movie__Column">
                <h1>{props.title}</h1>
                <div className="Movie__Genres">
                    {props.genres.map((v, index)=><MovieGenres genres={v} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight="true"
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}
function MoviePoster(props) {
    return (
        <img alt={props.alt} title={props.alt} src={props.poster} className="Movie__Poster"/>
    )
}
function MovieGenres({genres}) {
    return (
        <span className="Movie__Genres">{genres}</span>
    )
}
Movie.propTypes = {
    title : ProtoTypes.string.isRequired,
    poster : ProtoTypes.string.isRequired,
    genres : ProtoTypes.array.isRequired,
    synopsis : ProtoTypes.string.isRequired
}
export default Movie;