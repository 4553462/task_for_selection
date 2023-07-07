import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Авторизация:', username, password);

    if (username === 'admin' && password === 'password') {
      alert(`Привет, ${username}! Авторизация успешна!`);
    } else {
      alert('Неверное имя пользователя или пароль');
    }
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log('Регистрация:', username, password);
    alert(`Регистрация успешна! Добро пожаловать, ${username}!`);
  };

  return (
    <div className="container">
      <div className="form-container">
        {isLoginForm ? (
          <>
            <h2>Авторизация</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="submit">Войти</button>
            </form>
            <p id="new-user-link" onClick={handleToggleForm}>
              Новый пользователь
            </p>
          </>
        ) : (
          <>
            <h2>Регистрация</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <input
                type="text"
                placeholder="Имя"
                value={name}
                onChange={handleNameChange}
                required
              />
              <input
                type="number"
                placeholder="Возраст"
                value={age}
                onChange={handleAgeChange}
                required
              />
              <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <button type="submit">Зарегистрироваться</button>
            </form>
            <p id="back-to-login-link" onClick={handleToggleForm}>
              Вернуться к авторизации
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
