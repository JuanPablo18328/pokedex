import React, { useContext } from 'react'
import FavoriteContext from '../context/favoriteContext'

const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);

    let imgUrl = "https://avatars.githubusercontent.com/u/64151210?v=4"

    return (
        <nav>
            <div />
            <div>
                <img src={imgUrl} alt="pokeapi" className='navbar-image' />
            </div>
            <div>&#10084;&#65039; {favoritePokemons.length}</div>
        </nav>
    )
}

export default Navbar