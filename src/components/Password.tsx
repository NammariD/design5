import * as React from 'react';
import Input from '@mui/joy/Input';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/joy/Button';

export default function InfoBar() {
  return (
    <Input
      type="password"
      sx={{ backgroundColor: '#0B0D0E' }}
      placeholder="Password"
      endDecorator={
        <Button
          color = "neutral"
          size="sm"
          sx={{
            display: 'flex',
            alignItems: 'center', // Center vertically
            justifyContent: 'center', // Center horizontally
            backgroundColor: '#0B0D0E'
           
          }}
        >
          <VisibilityIcon />
        </Button>
      }
    />
  );
}
