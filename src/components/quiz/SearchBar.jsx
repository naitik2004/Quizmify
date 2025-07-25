import React ,{ useState} from 'react';
import { Search } from 'lucide-react';
import './SearchBar.css'

function SearchBar({onSearch}){
const [searchquery,setsearchquery] = useState('');

const handleSearch = (e) =>{
    e.preventDefault(); //prevent form reloading page
    onSearch(searchquery)
}

    return(
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar-container'>
                <input type='text' placeholder='Search The Topics You Want.!!' value={searchquery} 
                onChange={(e)=>{setsearchquery(e.target.value)}}
                className='searchbar-input'
                />

                <button type='submit' className='search-button' >
                <Search size={20}/>
                <span className='search-only' onClick={handleSearch}>Search</span>
                </button>

                
            </div>
        </form>
    )
}

export default SearchBar