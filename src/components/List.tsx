import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Box from "@mui/joy/Box";


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
        height: 703,
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
      <List
        size="sm"
        variant="plain"
        orientation="vertical"
        sx={{
          maxWidth: 366,
          top: 140,
        }}
      >
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>3100 Org of Pl..</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>4240 AI/ML Spr.24</ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx = {{color:"white"}}>CSCI 450 (345)</ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
