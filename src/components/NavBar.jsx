import { Stack } from '@mui/material';
import { Link } from  'react-router-dom';

import  logo   from '../images/newtubelogo.png';
import  SearchBar  from './SearchBar';


const NavBar = () => (
  // stack that compiles into a row style to contain the logo and the search bar

  <Stack direction="row" alignItems="center" spacing = "50px"  p={4} sx={{ position: 'sticky', background: '#000', top: 0,}}> 
  
    
    <Link to="/" style = {{ display: 'grid', alignItems: 'center', ml: '20px'}}>
      <img src=  {logo} alt ="mainLogo" height={45} />
    </Link>

    <SearchBar/>

  </Stack>
)

export default NavBar
