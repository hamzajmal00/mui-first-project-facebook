import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import AppRoute from './AppRoute';
import { Add } from './components/Add';
import { Feeds } from './components/Feeds';
import { Navbar } from './components/Navbar';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';


export default function 
() {
  const [mode, setmode] = useState("light")
  const [side, setside] = useState("none")
  
  const dartTheme = createTheme({
    palette:{
      mode:mode
    }
  })


 
  return (
    <ThemeProvider theme={dartTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'} >
      <Navbar side={side} setside={setside}/>
      <Stack direction={'row'} spacing={2} justifyContent="space-between">
      <Sidebar setmode={setmode} mode={mode} side={side} />
      <Feeds />
      <Rightbar />
      </Stack>
      <Add />
      </Box>
    </ThemeProvider>
  )
}
