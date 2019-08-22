import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{

    const [movies, setmovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 45362
        },
        {
            name: 'Kwame Despite',
            price: '$10',
            id: 78343
        },
        {
            name: 'Kwamena Mensah',
            price: '$10',
            id: 838585
        }
    ]);
    return(
        <MovieContext.Provider value ={[movies, setmovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}