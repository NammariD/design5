import * as React from 'react'; 
import Input from '@mui/joy/Input';
import Hide from './components/Hide';

export default function InfoBar() {
  return (
    <Input type = "password" sx={{ backgroundColor: '#0B0D0E' }} placeholder="Password" />
  );
}
