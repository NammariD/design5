import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Email from './components/Email';
import Password from './components/Password';
import AspectRatio from '@mui/joy/AspectRatio';
import LogInButton from './components/LogInButton';







export default function SignInSheet() {
  return ( 
   <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '15px' }}>
      <Card sx={{ width: 550, height: 406 }}>
        <div>
          <Typography level="title-lg">Welcome to BoardX!</Typography>
          <Email />
          <Password />
          <LogInButton />
        </div>
      </Card>
    </div>
  );
}
    


