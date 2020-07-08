import React, { Component } from 'react';



class FavMovie extends Component {


    render() {
        const { users, movies, usersFav, movieId } = this.props;
        const userList = usersFav[movieId] ? usersFav[movieId] : [];
        const FavUser = userList.map(uid => users[uid].name);

        return (

            <div >
                <h4> {movies[movieId].name} </h4>
                <ul className = "contact-avatar" style={{
                backgroundImage: `url("")`
            }}> {(FavUser).map(user =>
                    <li key={user}> <p> {user} </p></li>
                )}
                </ul>
            </div>
        )
    }

}

export default FavMovie;