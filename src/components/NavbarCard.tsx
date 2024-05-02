import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Selector from "./Selector";
import Input from "@mui/joy/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function MyApp() {
  return (
    <Box>
      <Sheet
        variant="plain"
        sx={{
          backgroundColor: "#white",
          height: "69px",
          margin: 0, // Remove any default margin
          padding: 0, // Remove any default padding
          position: "absolute", // Position the sheet absolutely
          top: 0, // Align the top edge with the top of the viewport
          right: 0, // Align the right edge with the right of the viewport
          width: "100%", // Make the width fill the viewport
          overflow: "auto", // Enable scrolling if content exceeds the viewport
        }}
      >
        <Input
          placeholder = "Search boards"
          variant="soft"
          sx={{
            left: "366px",
            width: "366px",
            top: "15px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Search
        </Input>
      </Sheet>
      <Sheet
        variant="plain"
        sx={{
          backgroundColor: "#white",
          height: "69px",
          margin: 0, // Remove any default margin
          padding: 0, // Remove any default padding
          position: "absolute", // Position the sheet absolutely
          top: 0, // Align the top edge with the top of the viewport
          left: 0, // Align the left edge with the left of the viewport
          width: "366px", // Make the width fill the viewport
          overflow: "auto", // Enable scrolling if content exceeds the viewport
        }}
      >
        <Selector />
      </Sheet>
    </Box>
  );
}
