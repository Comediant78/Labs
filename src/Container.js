import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export default function SimpleContainer({children}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container style={{height:"80vh"}}>
        {children}
      </Container>
    </React.Fragment>
  );
}