import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Box from "@mui/joy/Box";
import { Typography } from "@mui/joy";


export default function NavBarList() {
  return (
    <Box
      sx={{
        left: 0,
        justifyContent: "center",
        flexWrap: "wrap",
        top: 36,
        backgroundColor: "#121212",
        padding: 0,
        margin: -1,
        height: 703
      }}
    >
      <List
        size="sm"
        variant="plain"
        sx={{
          maxWidth: 366,
          top: 70,
        }}
      >
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>All Boards</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>Favorites</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>AI Assistant</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>AI Agent</ListItemButton>
        </ListItem>
      </List>
        <div style = {{position: "absolute", top:350,}}>
      <Typography sx = {{padding:"15px"}}>Organize your boards</Typography>
      <Typography sx = {{padding:"15px"}}>Rooms are designated spaces for projects or groups. </Typography>
      <Typography sx = {{padding:"15px"}}>Rooms can have their own members and permissions.</Typography>
      <Typography sx = {{padding:"15px"}}>Click the “+” icon to create a room</Typography>
        </div>
     
    </Box>
  );
}
