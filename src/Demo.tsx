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
    <div style={{ margin: 0, padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#121212' }}>
      <Card variant = "plain" sx={{ width: 550, height: 406, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#121212', boxShadow: 'xl' }}>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <img src = 'boardxlogo.png' alt="BoardX Logo" />

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
