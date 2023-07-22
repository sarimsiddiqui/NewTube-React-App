import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';

import { NavBar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';

const app = () => (

    // router wraps the entire application
    <BrowserRouter>
    <Box sx={{background: '#000'}}>
        
        <NavBar />
        
        <Routes>
        
            
            <Route path="/" exact element = {<Feed />} />
            <Route path ="/video/:id" element ={<VideoDetail/>} />
            <Route path ="/channel/:id" element ={<ChannelDetail/>} />
            <Route path ="/search/:searchTerm" element ={<SearchFeed/>} />
        </Routes>
        
    </Box>

    </BrowserRouter>
  )


export default app