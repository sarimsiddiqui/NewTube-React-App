import { Box, CardContent, CardMedia, Typography} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

// box that has a link to the object data and creates a card with the media inside of it as a image, the channel title, and the channel subscribers
const ChannelCard = ({channelDetail, marginTop}) => (
    <Box sx={{ boxShadow: 'none', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '356px', md: '320px'}, height: '326px', margin: 'auto', marginTop: marginTop}}>
        <Link to = {`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx= {{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#FFF'}}>
                <CardMedia image = {channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt =  {channelDetail?.snippet?.title} sx = {{ borderRadius: '50%', height: '180px', width: '180px', mb:2, boredr: '1px solid #e3e3e3'}}/>

                <Typography variant = "h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize: 14, color: 'gray', ml: '5'}}/>
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>

    </Box>

)
  
  


export default ChannelCard