import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Email from './components/Email';
import Password from './components/Password';
import AspectRatio from '@mui/joy/AspectRatio';





export default function SignInSheet() {
  return ( 
    <Card sx ={{ width: 300, height: 300 }}>
      <div>
        <Typography level="title-lg">Welcome to BoardX!</Typography>
        <Email />
        <Password />
        
      </div>
    
  
  </Card>
          );
          }
    


