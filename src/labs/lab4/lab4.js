import SimpleContainer from '../../Container';
import * as React from 'react';
import Counter from '../../Uses/UseState';
import ExampleComponent from '../../Uses/UseEffect';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/actions';
import Button from '@mui/material/Button';

export default function Lab4() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();

  return (
        <SimpleContainer>
        <h2>UseState</h2>
        <Counter/>
        <h2>UseEffect</h2>
        <ExampleComponent/>
        <h2>Redux</h2>
        <nav>
      <Button size='small' variant="contained" color="inherit" onClick={() => dispatch(increment())}>+</Button>
      <span>{count}</span>
      <Button size='small' variant="contained" color="info" onClick={() => dispatch(decrement())}>-</Button>
    </nav>
        </SimpleContainer>
  );
}
