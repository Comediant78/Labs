import React, { useState } from 'react';
import Button from '@mui/material/Button';
function Counter() {
  // Используем useState для создания состояния с начальным значением 0
  const [count, setCount] = useState(0);

  // Функция для увеличения счетчика
  const increment = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения счетчика
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Счетчик: {count}</h2>
      {/* Кнопка для увеличения счетчика */}
      <Button variant="contained" color="primary" onClick={increment}>Увеличить</Button>
      {/* Кнопка для уменьшения счетчика */}
      <Button variant="contained" color="primary" onClick={decrement}>Уменьшить</Button>
    </div>
  );
}

export default Counter;