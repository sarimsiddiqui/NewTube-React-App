import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  
const [searchTerm, setSearchTerm] = useState('')
const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();
  if(searchTerm) {
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  }
}
  return (
    // paper component that is the search bar with the intput inside of the bar as well as the icon logo that is used as the submit button
    
    <Paper elevation = "24" component ="form" onSubmit={handleSubmit} sx= {{borderRadius:20, border:'1px solid #e3e3e3', pl:2, boxShadow:'none', mr: {sm:5},}}>

    <input className='search-bar' placeholder='What are you looking for?...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

    <IconButton type='submit' sx= {{p:'10px', color:'red'}}> <Search/> </IconButton>

    </Paper>
  )
}

export default SearchBar