import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, AppBar, Toolbar, Typography, Button, Grid, Card, CardContent, CardMedia, Container, backdropClasses } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ControlledOpenSpeedDial from './menu';
import SizeAvatars from './avatar';
import myposts from './myposts/myposts';
import Navbar from './NavBar/navabar';
import BoxSx from './usernameBox';
import Myposts from './myposts/myposts';
import "./form.css"
import SizeAvatarsCarosal from './carosalAvathat';

const fetchData = async () => {
  try {
    const response = await axios.get("/allusers");
    return response.data.slice(0);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

const carouselItems = [
  { id: 1, title: 'Item 1', content: 'Content for item 1', imageUrl: 'https://www.google.com/imgres?q=desktop%20images%20of%20kajal&imgurl=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6073730.jpg&imgrefurl=https%3A%2F%2Fwallpapercave.com%2Fkajal-desktop-wallpapers&docid=IN1wgCMN3iCscM&tbnid=51LvKc0jbgWqXM&vet=12ahUKEwjg-uz31uqMAxWJRWwGHQXiKRUQM3oECHwQAA..i&w=2712&h=1536&hcb=2&ved=2ahUKEwjg-uz31uqMAxWJRWwGHQXiKRUQM3oECHwQAA' },
  { id: 2, title: 'Item 2', content: 'Content for item 2', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Findianexpress.com%2Farticle%2Fentertainment%2Fmovie-review%2Fmajor-movie-review-sandeep-unnikrishnan-7949642%2F&psig=AOvVaw2df_Euhqe4mjbk5EOXRLJF&ust=1745378489071000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMCFkN7X6owDFQAAAAAdAAAAABAE' },
  { id: 3, title: 'Item 3', content: 'Content for item 3', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Fm416-wallpapers&psig=AOvVaw15E-XM93s66gJJ98vSPp5u&ust=1745378442235000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOD1usfX6owDFQAAAAAdAAAAABAE' },
  { id: 4, title: 'Item 4', content: 'Content for item 4', imageUrl: 'https://www.google.com/imgres?q=desktop%20images%20of%20kajal&imgurl=https%3A%2F%2Fc4.wallpaperflare.com%2Fwallpaper%2F26%2F283%2F823%2Factresses-kajal-aggarwal-hd-wallpaper-preview.jpg&imgrefurl=https%3A%2F%2Fwww.wallpaperflare.com%2Factresses-kajal-aggarwal-wallpaper-ynwuy&docid=5Sv0Cb-SL7KAAM&tbnid=xZr8SjqKekR4HM&vet=12ahUKEwjg-uz31uqMAxWJRWwGHQXiKRUQM3oECGIQAA..i&w=728&h=410&hcb=2&ved=2ahUKEwjg-uz31uqMAxWJRWwGHQXiKRUQM3oECGIQAA' },
];

function App() {
  const [MyPostsButton, setMyPostsButton]= useState(false);
  const [AllPosts, setAllPostsButton] = useState(true);
  const [posts, setPosts] = useState([]);


  async function handleMyPostsButton(){
    setAllPostsButton(false);
    setMyPostsButton(true);
  }
  useEffect(() => {
    fetchData().then(data => setPosts(data));
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };
    loadPosts();
    const interval = setInterval(() => {
      loadPosts();
    }, 2000); // Fetch data every 5 seconds
    return () => clearInterval(interval);
  }, []);


  return (
    <div>{AllPosts ?(
    <div>
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
    <AppBar position="fixed">
            <Toolbar>
            <Button color="inherit" onClick={handleMyPostsButton}>Myposts</Button>
            <Button color="inherit" >AllPosts</Button>
            </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', flex: 1, height: "40vh" }}>
        <Box sx={{ marginTop:"12vh",width: '15%', bgcolor: '#f1f1f1', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
          <Button fullWidth variant="contained" sx={{ mb: 2 }}>Button 1</Button>
          <Button fullWidth variant="contained" sx={{ mb: 2 }}>Button 2</Button>
          
        </Box>
        <Box sx={{ flex: 1, p: 2, overflowY: 'auto' }}>
          <Carousel sx={{ marginTop:"10vh"}}>
            {carouselItems.map(item => (
              <Box key={item.id}>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.imageUrl}
                  alt={item.title}
                />
                <CardContent sx={{marginTop:"-15vh"}}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography>{item.content}</Typography>
                </CardContent>
              </Box>
            ))}
          </Carousel>
          <Grid container spacing={2} sx={{ mt: 2,marginTop:"-2vh" }}>
            {posts.map(post => (
              <Grid item  xs={12} sm={2} md={4} key={post.id}>
                <Card >
                  <CardContent >
                  <SizeAvatars />   
                  
                  <Typography   className="headername" sx={{  width: "50vh", textAlign: "left",p: 0.8, marginLeft: "10vh", marginTop: "-6vh" }}> 
                        {post.userId} </Typography>

                    <Typography variant="h6" component="div">
                      <br/>
                      {post.email}
                      {/* /add photo in a circle here */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.contact}
                      <ControlledOpenSpeedDial sx={{
          position: 'absolute',  // Positioning
          top: '10px',           // Adjust the top position
          left: '10px',          // Adjust the left position
          fontSize: '1.2rem',    // Reduce the icon size
        }}/>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      
    </Box>
    </div>)
    :(<div><Myposts /></div>)
}</div>
  );
}

export default App;
