// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ id: null, first_name: '', last_name: '', position: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    if (currentUser.id) {
      await axios.put(`http://localhost:8000/api/users/${currentUser.id}/`, currentUser);
    } else {
      await axios.post('http://localhost:8000/api/users/', currentUser);
    }
    fetchUsers();
    setCurrentUser({ id: null, first_name: '', last_name: '', position: '' });
  };

  const handleEdit = user => {
    setCurrentUser(user);
  };


  const handleDelete = async id => {
    await axios.delete(`http://localhost:8000/api/users/${id}/`);
    fetchUsers();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="first_name" value={currentUser.first_name} onChange={handleInputChange} />
        <input type="text" name="last_name" value={currentUser.last_name} onChange={handleInputChange} />
        <input type="text" name="position" value={currentUser.position} onChange={handleInputChange} />
        <button type="submit">Guardar</button>
        <div>
      </div>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.position}
            <button onClick={() => handleEdit(user)}>Editar</button>
            <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
