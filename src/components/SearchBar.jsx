import React, { useState } from 'react'
import { searchPokemon } from '../../api'

const SearchBar = (props) => {

    const { onSearch } = props;
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState();

    const onChange = (e) => {
        setSearch(e.target.value);
        if(e.target.value.lenght === 0) {
            onSearch(null);
        }
    }

    const onClick = async (e) => {
        onSearch(search);
    }

  return (
    <div className='searchbar-container'>
        <div className='searchbar'>
            <input placeholder='Buscar Pokemon...'
            onChange={onChange}/>
        </div>

        <div className='searchbar-btn'>
            <button onClick={onClick}>Buscar</button>
        </div>
        <div>
            
        </div>
        
    </div>
  )
}

export default SearchBar