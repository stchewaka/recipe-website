import { AccountCircle, Brightness2, Cake, Home, People, Settings, TipsAndUpdates } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'

const Sidebar = () => {
    return (
        <Box 
         flex={1}
          p={2} 
          sx={{display:{xs: "none", sm: "block"}}} >
        <Box position = "fixed">
        <List>
            <ListItem disablePadding>
            <ListItemButton component ="a" href ="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Recipes">
              <ListItemIcon>
                <Cake />
              </ListItemIcon>
              <ListItemText primary="Recipes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#tips">
              <ListItemIcon>
                <TipsAndUpdates />
              </ListItemIcon>
              <ListItemText primary="Kitchen Tips" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#friends">
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Settings">
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Profile">
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component ="a" href ="#Profile">
              <ListItemIcon>
                <Brightness2 />
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
          </List>
          </Box>
          </Box>
    
    )
}
export default Sidebar