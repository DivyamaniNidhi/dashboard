import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Box, Button, Typography, Stack, useMediaQuery } from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);
  const percentage = (count / 100) * 100;
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const springProps = useSpring({
    background: `linear-gradient(to right, #4caf50 ${percentage}%, #f0f0f0 ${percentage}%)`,
  });

  return (
    <animated.div style={{ 
      ...springProps, 
      width: '100%', 
      height: '25vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '16px'
    }}>
      <Typography variant="h4">Count: {count}</Typography>
      <Box mt={2}>
        <Stack direction={isSmallScreen ? 'row' : 'row'} spacing={2}>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setCount(count + 1)}
            disabled={count === 100}
          >
            {isSmallScreen ? '+' : 'Increment'}
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={() => setCount(count - 1)} 
            disabled={count === 0}
          >
            {isSmallScreen ? '-' : 'Decrement'}
          </Button>
          <Button 
            variant="outlined" 
            color="error" 
            onClick={() => setCount(0)}
          >
            {isSmallScreen ? 'Reset' : 'Reset'}
          </Button>
        </Stack>
      </Box>
    </animated.div>
  );
};

export default Counter;
