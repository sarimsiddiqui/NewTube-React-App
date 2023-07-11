import { Box, Stack, Typography, Card, CardContent } from '@mui/material';
import { useState, useEffect, useRef } from 'react';




const Welcome = () => {
  const username = useRef();
  const handleClick =()=> {
    console.log(username.current.value)
    localStorage.setitem("name", username.current.value)
  }
  console.log(localStorage.getItem("name"),"****")
  return (
    
    <Box component = "span" sx = {{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: '100px'}} > 
      <Card className= "welcome-box" sx= {{width: (window.innerWidth/1.2), height: (window.innerHeight/1.5) }}>
        <CardContent>
          <Typography> Welcome to NewTube</Typography>
          <form>
            <label> Enter Your name:
              <input ref = {username} />
              <button onClick = {handleClick}>Submit</button>
            </label>
            <label> What are you intersted in watching?
              <input type = "text" name = "username" />
            </label>
          </form>
        </CardContent>
      </Card>
      </Box>

      
  )
}

export default Welcome