import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    setAge(value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    console.log('Регистрация:', username, password, email);
    alert(`Регистрация успешна! Добро пожаловать, ${username}!`);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className="password-toggle">
                <input
                  type="checkbox"
                  id="password-toggle"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                />
                <label htmlFor="password-toggle">Показать пароль</label>
              </div>
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
                min="0"
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
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <div className="password-toggle">
                <input
                  type="checkbox"
                  id="password-toggle"
                  checked={showPassword}
                  onChange={toggleShowPassword}
                />
                <label htmlFor="password-toggle">Показать пароль</label>
              </div>
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
