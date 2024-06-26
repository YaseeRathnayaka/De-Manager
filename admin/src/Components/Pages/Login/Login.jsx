import React, {useState} from 'react';

const Login = () => {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handleLogin = () =>{
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <div className='bg-gray-800 w-2/5 h-full'>
        <div className='bg-purple-100 w-full h-4/5 mt-20 ml-20'>
      </div>
      </div>

      <div className='w-3/5 h-full '>
      <div className='bg-gray-300 w-11/12 h-4/5 mt-20 mr-40'>
      <div className="w-3/5 flex flex-col justify-center items-center p-32 ml-48">
                <h2 className="text-2xl font-bold mb-4">Login Your Account</h2>
            <div className='mb-5'>
              <input
               type='text'
               placeholder='Email'
               value={email}
               onChange={handleEmailChange}
               className='w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'/>
'           </div>    

           <div className='mb-5'>
              <input
               type='text'
               placeholder='Email'
               value={email}
               onChange={handlePasswordChange}
               className='w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500'/>
'           </div>  

            <button onClick={handleLogin} className='w-full p-3 bg-purple-800 text-white rounded-md mb-4 hover:bg-purple-900'>
             Login
             </button>

             <div className='text-center'>
             <a href="#" className="text-purple-700 hover:underline">Forgot Password</a>
             </div>
       </div>
      </div>
      </div>
      </div>
      
  );
}

export default Login;
