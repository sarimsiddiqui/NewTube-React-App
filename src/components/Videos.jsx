import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';

// stack of row of videos or channels that gets placed onto the feed. If the item is a video, it will show a video card and if it is a channel, it will show a channel card. 
const Videos = ({ videos, direction }) => {

  if(!videos?.length) return 'Loading...';
  return (
    <Stack direction = {direction || "row"} flexWrap="wrap" justifyContent="start" gap={2} >
        {videos.map((item, idx) => (
            <Box key ={idx}>
                {item.id.videoId && <VideoCard video={item}/>}
                {item.id.channelId && <ChannelCard channelDetail={item}/>}
            </Box>
        ))}
        
    </Stack>
  )
}

export default Videos