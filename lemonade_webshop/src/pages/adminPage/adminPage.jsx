import React, { useState } from 'react';
import logo from '../../assets/billeder/logo.png';
import './adminPage.css';

// Simulerer en liste af drinks
const drinksData = [
  { id: 1, name: 'Drink 1', price: 5, quantitySold: 20 },
  { id: 2, name: 'Drink 2', price: 6, quantitySold: 15 },
  { id: 3, name: 'Drink 3', price: 7, quantitySold: 10 },
];

export const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Her kan du implementere din logik til at tjekke, om brugeren er en admin
    // Dette er en simplificeret version, hvor brugeren altid anses for at være admin
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  if (isLoggedIn) {
    return (
      <div className="admin-container">
        <h1>Welcome, Admin!</h1>
        <h2>Drinks List</h2>
        <table className="drinks-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity Sold</th>
              <th>Total Profit</th>
            </tr>
          </thead>
          <tbody>
            {drinksData.map((drink) => (
              <tr>
                <td>{drink.name}</td>
                <td>${drink.price}</td>
                <td>{drink.quantitySold}</td>
                <td>${drink.price * drink.quantitySold}</td>
              </tr>
            ))}
          </tbody>
          
        </table>
        <div className="totalProfit">
          <h2>Total Profit</h2>
          <p>
            {/* Beregner den samlede profit ved at summere profitten for hver drink */}
            ${drinksData.reduce((total, drink) => total + drink.price * drink.quantitySold, 0)}
          </p>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="login-container">
        <div className="loginLogo">
          <video className="logo-video" autoPlay loop>
            <source src={require("../../assets/billeder/lemonade_video1.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='login'>
          <img src={logo} alt="Logo" className="logo-image-login" />
          <h1>Login admin page</h1>
          <p>Username: admin | password: password</p>
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleLogin}>Login as Admin</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>

    );
  }
};

export default AdminPage;