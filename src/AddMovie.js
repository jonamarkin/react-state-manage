import React, { useState, useContext } from 'react';
import {MovieContext} from './MovieContext';


const AddMovie = () =>{

    const [name, setname] = useState('');
    const [price, setprice] = useState('');
    const [movies, setmovies] = useContext(MovieContext);

    const updateName = (e) =>{
        setname(e.target.value);
    }

    const updatePrice = (e) =>{
        setprice(e.target.value);
    }

    const addMovie = e =>{
        e.preventDefault();
        setmovies(movies =>[...movies, {name: name, price: price}]);
    }

    return(
        // <form onSubmit ={addMovie}>
        //     <input type="text" name="name" value={name} onChange={updateName}/>
        //     <input type="text" name="price" value={price} onChange={updatePrice}/>
        //     <button >Submit</button>
        // </form>

        <form  onSubmit ={addMovie}>
            <div className="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={updateName}/>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Price</label>
                <input type="text" className="form-control" placeholder="Price" name="price" value={price} onChange={updatePrice}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default AddMovie;