import React from 'react';
import Counter from './components/Counter';
import UserDataForm from './components/UserDataForm';
import RichTextEditor from './components/RichTextEditor';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App" style={{ margin: '1rem' }}>
      <Counter />
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on large
          gap: 2,
          mt: 4,
          alignItems: 'stretch',
        }}
      >
        <Box sx={{ flex: 1 }}>  {/* Ensures both cards take equal space */}
          <UserDataForm />
        </Box>
        <Box sx={{ flex: 1 }}>  {/* Ensures both cards take equal space */}
          <RichTextEditor />
        </Box>
      </Box>
    </div>
  );
}

export default App;
