import React from 'react';



const FavMovie = props => {
    const { users, movies, usersFav, movieId } = props;
    const userList = usersFav[movieId] ? usersFav[movieId] : [];
    const FavUser = userList.map(uid => users[uid].name);

    return (

        <div className="favorite-movies">
            <h4> {movies[movieId].name} </h4>
            <h5> Liked by: </h5>
            <ul> {(FavUser).map(user =>
                <li key={user}> <p> {user} </p></li>
            )}
            </ul>
        </div>
    );
};



export default FavMovie;