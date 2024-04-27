import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
const UserList = () => {
  const [users, setUsers] = useState([]);

  function fetchAllUsers() {
    return fetch('http://localhost:3001/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(users => {
        console.log('Users fetched successfully:', users);
        return users; 
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        throw error; 
      });
  }
  
  useEffect(() => {
    fetchAllUsers()
      .then(users => setUsers(users))
      .catch(error => console.error('Error loading users:', error));
  }, []);

  const createUser = () => {
      
        
        fetchAllUsers()
          .then(users => setUsers(users))
          .catch(error => console.error('Error reloading users:', error));
      }

      const deleteUserByUsername = (usernameToDelete) => {
        
        fetch(`http://localhost:3001/users?username=${usernameToDelete}`, {
          method: 'DELETE'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log('User deleted successfully');
            
            fetchAllUsers()
              .then(users => setUsers(users))
              .catch(error => console.error('Error reloading users:', error));
          })
          .catch(error => console.error('Error deleting user:', error));
      };
      
  return (
    <div>
      <h2>Список пользователей</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}</li>
        ))}
      </ul>
      <Button onClick={() => createUser()}>
        Обновить список пользователей
      </Button>
        <h3>удаление пользователей</h3>
      {users.map(user => (
          <li key={user.id}>{user.username} - {user.email}
           <Button onClick={() => deleteUserByUsername(user.username)}>Удалить</Button>
          </li>
        ))}

    </div>
  );
};

export default UserList;