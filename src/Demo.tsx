import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Email from "./components/Email";
import Password from "./components/Password";
import AspectRatio from "@mui/joy/AspectRatio";
import LogInButton from "./components/LogInButton";
import ForgotPassword from "./components/ForgotPassword";
import { extendTheme } from "@mui/joy";
import Selector from "./components/Selector";
import NavbarCard from "./components/NavbarCard";
import NavBarList from "./components/List";
import Box from "@mui/joy/Box";
import FeedBackButton from "./components/FeedBackButton";
import NewBoard from "./components/NewBoard";

export default function BoardXHome() {
  return (
    <Box sx = {{height:"100px", backgroundColor:"blue", margin:0,}}>
      <NavbarCard />
      <NavBarList />
      <FeedBackButton />
      <Typography variant="plain" level = "h2" sx = {{position:"absolute", top:100, left:450, color:"white"}}>All Boards</Typography>
      < NewBoard />
    </Box>
  );
}
