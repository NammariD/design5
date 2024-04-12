import * as React from 'react';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';
import IconButton from '@mui/joy/IconButton';


export default function Hide() {
  return(
    <IconButton
  sx={{
    "--IconButton-size": "35px"
  }}
>
  <FavoriteBorder />
</IconButton>
    );
}

