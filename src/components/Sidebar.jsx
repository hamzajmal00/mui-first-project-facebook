import { Group, Home, MarkEmailReadTwoTone, ModeNight, NightShelter, Pages, Person, Settings, UsbRounded } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

export const Sidebar = ({mode,setmode}) => {
  return (
    <Box  flex={1} p={2} sx={{display:{xs:'none',sm:'block'}}}>
      <Box position={'fixed'}>
      <List>
      <ListItem disablePadding>
      <ListItemButton component={'a'} href='#'>
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={'a'} href='#'>
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={'a'} href='#'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component={'a'} href='#'>
            <ListItemIcon>
              <MarkEmailReadTwoTone />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component={'a'} href='#'>
            <ListItemIcon>
              <UsbRounded />
            </ListItemIcon>
            <ListItemText primary="User" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component={'a'} href='#'>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component={'a'} href='#'>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component={'a'} href='#'>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e => setmode(mode === 'light' ? 'dark' : 'light')}/>
          </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
