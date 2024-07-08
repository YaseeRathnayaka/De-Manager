import React, {useState} from 'react';
import profile from './../../../assets/car.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="relative flex h-screen">
      <div className='absolute top-0 left-0 z-0 w-3/5 h-full bg-gray-800'></div>
      
      <div className='relative z-10 flex w-2/5 mt-16 ml-10 bg-purple-100 h-4/5'>
        <img src={profile} alt="Profile" className="max-w-full m-auto h-72" />
      </div>

      <div className='relative z-10 flex items-center justify-center w-3/5 h-auto'>
        <div className='w-11/12 p-8 mr-40 bg-gray-300 h-4/5'>
          <div className="flex flex-col items-center justify-center">
            <h2 className="mb-4 text-2xl font-bold">Login Your Account</h2>

            <div className='mb-5'>
              <input
                type='text'
                placeholder='Email'
                value={email}
                onChange={handleEmailChange}
                className='p-3 bg-purple-100 border rounded-md w-96 focus:outline-none focus:border-gray-800'
              />
            </div>    

            <div className='mb-5'>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                className='p-3 bg-purple-100 border rounded-md focus:outline-none focus:border-gray-800 w-96'
              />
            </div>  

            <button onClick={handleLogin} className='p-3 mb-4 text-white bg-purple-800 rounded-md w-96 hover:bg-purple-900'>
              Login
            </button>

            <div className='text-center'>
              <a href=" " className="text-purple-700 hover:underline">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
