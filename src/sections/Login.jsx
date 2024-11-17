import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInput from '../components/UserInput';
import Button from '../components/Button';
import PasswordInput from '../components/PasswordInput';
import { login2 } from '../utility/auth_2';
import Display from '../components/Display';

const Login = ({ setUsername, username, returnData2 }) => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Username:', username);
    console.log('Password:', password);
  }, [username, password]);

  const handleUsernameChange = (e) => { setUsername(e.target.value); };

  const handlePasswordChange = (e) => { setPassword(e.target.value); };

  const handleSubmit = () => {
    const loginResult = login2(returnData2, username, password);
    console.log(loginResult);
    console.log('Form submitted');
    
    if (loginResult.success) {
      console.log('try open page');
      setUsername(username);
      navigate('/homepage');
    } else {
      setErrorMessage(loginResult.message); // Set error message if login fails
    }
  };

  return (
    <section>
      <h1 className='text-3xl flex items-center font-montserrat text-coral-red'>Login</h1>
      <UserInput placeholder='student@mail.com' value={username} onChange={handleUsernameChange} />
      <div className='mt-5'>
        <PasswordInput placeholder='password' value={password} onChange={handlePasswordChange} />
      </div>
      <div className='mt-5'>
        <Button label='SIGN IN' onClick={handleSubmit} />
      </div>
      <div className='flex text-center text-coral-red items-center justify-center text-xl'>
        {errorMessage && <Display todisplay={errorMessage} />} {/* Display error message if present */}
      </div>
    </section>
  )
}

export default Login;
