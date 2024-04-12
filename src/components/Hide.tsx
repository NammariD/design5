import * as React from 'react';
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function Hide() {
  return (
      <Button endDecorator={<KeyboardArrowRight />} color="success">
        Go to checkout
      </Button>
  );
}
