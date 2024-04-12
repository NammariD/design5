import * as React from 'react';
import Button from '@mui/joy/Button';
import SvgIcon from '@mui/joy/SvgIcon';

export default function Hide() {
  return(
    <Button startDecorator = { 
      <SvgIcon>
        <svg  xmlns="http://www.w3.org/2000/svg">
          
        </svg>
      </SvgIcon>
    }
    </Button>
    );
}

