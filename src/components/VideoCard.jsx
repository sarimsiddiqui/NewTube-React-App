import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import React from 'react';


import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';









const VideoCard = ({ video: { id: { videoId }, snippet} }) => {


    
        const [d, setDimensions] = React.useState({ 
          height: window.innerHeight,
          width: window.innerWidth
        })
        React.useEffect(() => {
          function handleResize() {
            setDimensions({
              height: window.innerHeight,
              width: window.innerWidth
            })
          
      }
      
          window.addEventListener('resize', handleResize)
        })
    

  return (

    
    <Card sx= {{ width: { xs: d.width-300, sm: d.width-300, md: d.width-300 , xs: '100%'}, boxShadow: 'none', boredrRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
            image = {snippet?.thumbnails?.high?.url}
            alt = {snippet?.title}
            sx={{ width: {xs: '100%', sm: (d.width), md:  (d.width)}, height:d.height/3}}
            />
            
                <ReactPlayer url = {`https://www.youtube.com/watch?v=${videoId}`} className ="react-player" controls  />         

        </Link>


        <CardContent sx= {{backgroundColor: '#1e1e1e', height: '50px',}}>


            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant ="subtitle1" fontWeight="bold" color="#FFF">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant ="subtitle2" fontWeight="bold" color="gray" sx= {{hover: 'blue'}}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5'}}/>
                </Typography>
            </Link>


        </CardContent>
        
    </Card>
  )
  
}
      


export default VideoCard