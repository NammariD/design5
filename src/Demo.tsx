import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Email from './components/Email';
import Password from './components/Password';
import AspectRatio from '@mui/joy/AspectRatio';
import LogInButton from './components/LogInButton';
import ForgotPassword from './components/ForgotPassword';

export default function SignInSheet() {
  return ( 
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '15px', backgroundColor: '#121212' }}>
      <Card sx={{ width: 550, height: 406, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#121212'}}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img src= 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQI_4f4s3JNA&psig=AOvVaw2YMa4lAnrloA7YV74qXWre&ust=1712959422457000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPjLnqGVu4UDFQAAAAAdAAAAABAE' alt="BoardX Logo" />

          <Typography>Welcome to BoardX!</Typography>
          <div style={{ margin: '20px 0' }}>
            <Email />
          </div>
          <div style={{ margin: '20px 0' }}>
            <Password />
          </div>
          <div style={{ margin: '20px 0' }}>
            <LogInButton />
          </div>
          <div style={{ margin: '20px 0' }}>
            <ForgotPassword />
          </div>
        </div>
      </Card>
    </div>
  );
}
