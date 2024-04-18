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

export default function BoardXHome() {
  return (
    <Box>
      <NavbarCard />
      <NavBarList />
      <div style = {{position: "absolute", justifyContent:"center", top:250, left:700}}>
        <img src="portrait.png" alt="Portrait" />
        <Typography sx = {{color:"white", justifyContent:"center"}}>When you star boards, they’ll show up here for easy access.</Typography>
      </div>

      <FeedBackButton />
    </Box>
  );
}
