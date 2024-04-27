import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Userlist from './Userlist';
import SimpleContainer from '../../Container';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', formData);
      console.log('User registered successfully:', response.data);
      
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <SimpleContainer>
    <form onSubmit={handleSubmit}>
      <h2>Форма регистрации</h2>
      <label>
        Логин:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Пароль:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <Button type="submit">Зарегистрироваться</Button>
    </form>
    <Userlist/>
    </SimpleContainer>
  );

};

export default RegistrationForm;