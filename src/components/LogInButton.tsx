import * as React from 'react';
import Button from '@mui/joy/Button';

export default function BasicButtons() {
  return (
    <Button sx = {{ width: 550, backgroundColor: '#F21D6B', '&:hover': {
          backgroundColor: '#FF4081',}, }}  >Log In</Button>
    );
}
