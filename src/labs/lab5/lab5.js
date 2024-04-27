import React, {useCallback} from 'react';
import { useForm } from 'react-hook-form';
import SimpleContainer from '../../Container';
import Button from '@mui/material/Button';

function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = useCallback((data) => {
    console.log(data); 
  }, []);

  return (
    <SimpleContainer>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Форма регистрации</h2>
      <label>
        Логин:
        <input type="text" {...register("username", { required: true })} />
        {errors.username && <span>Это поле обязательно для заполнения</span>}
      </label>
      <br />
      <label>
        Почта:
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Это поле обязательно для заполнения</span>}
      </label>
      <br />
      <label>
        Пароль:
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Это поле обязательно для заполнения</span>}
      </label>
      <br />
      <Button color='success' type="submit">Зарегистрироваться</Button>
    </form>
    </SimpleContainer>
  );
}

export default RegistrationForm;