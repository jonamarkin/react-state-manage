import React, {useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movies, setmovies] = useContext(MovieContext);

    return(
        // <div>
        //     <h3>Ato</h3>
        //     <p>List of movies: {movies.length}</p>
        // </div>

        <nav className="navbar navbar-dark bg-primary">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Jonathan Ato Markin    List of movies: {movies.length}<span class="sr-only">(current)</span></a>
                </li>
            </ul>    
        </nav>
        
    );
}

export default Nav;