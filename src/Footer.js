import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'center'}} elevation={3}>
      <Button>Обратная связь</Button>
      <Button>О компании</Button>
      </Paper>
    </Box>
  );
}