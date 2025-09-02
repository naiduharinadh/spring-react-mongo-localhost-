import React, { useEffect, useState } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia, Container, backdropClasses } from '@mui/material';
import App from '../ScreenSet';
import Myposts from '../myposts/myposts';
function Navbar(){
    const [MyPostsButton, setMyPostsButton] = useState(false);
  const [AllPostsButton, setAllPostsButton] = useState(false);

  const handleMyPostsButton = () => {
    setMyPostsButton(true);
    setAllPostsButton(false); 
  };

  const handleAllPostsButton = () => {
    setAllPostsButton(true);
    setMyPostsButton(false); 
  };
    return (
        <AppBar position="fixed">
            <Toolbar>
            <Button color="inherit" onClick={handleMyPostsButton}>Myposts</Button>
            <Button color="inherit" onClick={handleAllPostsButton}>AllPosts</Button>
            </Toolbar>
      {AllPostsButton && <App />}
      {MyPostsButton && <Myposts />}
      </AppBar>
    )
}
export default Navbar;
