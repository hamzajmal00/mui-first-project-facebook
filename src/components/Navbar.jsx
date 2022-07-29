import { Notifications, Pets, PetsOutlined } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'


const StyledToolBar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
});
const Search = styled("div")(({theme}) =>({
  backgroundColor:'white',
  width:'40%',
  padding:'0 10px',
  borderRadius:theme.shape.borderRadius
}));
const IconsBox = styled("Box")(({theme}) =>({
  display:'none',
  gap:'20px',
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'flex'
  }

}));
const UserBox = styled("Box")(({theme}) =>({
  display:'flex',
  gap:'10px',
  alignItems:'center',
  [theme.breakpoints.up("sm")]:{
    display:'none'
  }

}))
export const Navbar = () => {
  const [open, setopen] = useState(false)
  
  return (
    <AppBar position='sticky'>
        <StyledToolBar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:'block'}}}>
            Navbar
            </Typography>
            <PetsOutlined sx={{display:{xs:"block", sm:'none'}}} />
            <Search><InputBase placeholder='Search' /></Search>
            <IconsBox onClick={e => setopen(true)}>
              <Badge badgeContent={4} color="error">
              <MailIcon />
              </Badge>
              <Badge badgeContent={4} color="error">
              <Notifications />
              </Badge>
              <Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />

            </IconsBox>
            <UserBox onClick={e => setopen(true)}>
            <Avatar sx={{width:30,height:30}} src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
             <Typography variant='span'>Hamza</Typography>
            </UserBox>
        </StyledToolBar>
        <Menu sx={{top:'40px'}}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClick={e => setopen(false)}
        open={open}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
