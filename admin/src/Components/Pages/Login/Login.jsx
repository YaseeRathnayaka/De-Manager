import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Perform login logic here, e.g., call an authentication function
    // For example, you might use Firebase authentication:
    // auth.signInWithEmailAndPassword(email, password).then(...)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='container p-4 rounded-md bg-slate-600'>
      <div className="flex flex-col p-4 mb-4 rounded-md bg-slate-300">
        <label>Email:</label>
        <input
          type="text"
          placeholder='email'
          value={email}
          onChange={handleEmailChange}
          className="p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col p-4 mb-4 rounded-md bg-slate-300">
        <label>Password:</label>
        <input
          type="password"
          placeholder='password'
          value={password}
          onChange={handlePasswordChange}
          className="p-2 rounded-md"
        />
      </div>
      <button onClick={handleLogin} className="p-2 text-white bg-blue-500 rounded-md">Submit</button>
    </div>
  );
};

export default Login;
