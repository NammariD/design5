import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';

export default function OverflowCard() {
  return (
    <Card variant="plain" sx={{position: "abosolute",left:400, width: 320, bottom:500 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="NewBoard.png"
            srcSet="NewBoard.png"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">Create New Board</Typography>
        
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        
      </CardOverflow>
    </Card>
  );
}