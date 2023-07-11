import { useState, useEffect, useRef } from 'react';
import { Box, Stack, Typography, Grow, Card, CardContent } from '@mui/material';
import  { Sidebar, Videos }  from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');

  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then ((data) => setVideos(data.items))

  }, [selectedCategory]);

  

  return (



    <Stack  sx = {{ flexDirection: { sx: "column", md: "row"}}}>



      <Box sx= {{ height: { sx: 'auto', md: '92vh'}, borderRight: '1px soid #fff', px: {sx: 0, md: 2}}}>


        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <Typography className="signature" variant= "body2" sx={{mt:1.5, color: '#fff'}}>
          Created by Sarim Siddiqui
        </Typography>
     </Box>



      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}> 

        <Grow in="checked" style={{ transformOrigin: '0 0 0' }} {...("checked" ? { timeout: 1000 } : {})} > 

        <Typography variant ="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style = {{color: '#F31503'}}> videos</span>
        </Typography>
        </Grow>

        <Videos videos ={videos}/>
        

      </Box>




    </Stack>
  )
}

export default Feed