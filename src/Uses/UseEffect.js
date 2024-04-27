import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  // Состояние для хранения времени
  const [time, setTime] = useState(new Date());

  // useEffect с пустым зависимостью массива будет вызван только после монтирования и рендеринга компонента
  useEffect(() => {
    // Функция, которая будет вызываться при каждом обновлении компонента
    const interval = setInterval(() => {
      // Обновление времени каждую секунду
      setTime(new Date());
    }, 1000);

    // Функция возвращаемая из useEffect будет вызвана при размонтировании компонента
    return () => clearInterval(interval);
  }, []); // Пустой массив зависимостей означает, что useEffect будет вызван только при монтировании и размонтировании компонента

  // Вывод времени в компоненте
  return (
    <div>
      <h1>Текущее время:</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default ExampleComponent;