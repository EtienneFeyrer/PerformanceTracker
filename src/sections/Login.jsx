import React, { useState, useEffect } from 'react'
import{useNavigate} from 'react-router-dom';
import UserInput from '../components/UserInput'
import Button from '../components/Button'
import PasswordInput from '../components/PasswordInput'

import { login } from '../utility/auth'
import Display from '../components/Display'
import { login2 } from '../utility/auth_2'



const Login = ({setUsername, username,returnData2}) => {
  
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        console.log('Username:', username);
        console.log('Password:', password);
      }, [username, password]);
    

    const handleUsernameChange = (e) => {setUsername(e.target.value);};

    const handlePasswordChange = (e) => {setPassword(e.target.value)}

      console.log(returnData2)

    const handleSubmit = () => {
      console.log(login2(returnData2,username, password));
        console.log('Form submitted');
        if (login2(returnData2,username, password).success) {
          console.log('try open page');
          setUsername(username);
          navigate('/homepage');
        }
      };

  return (
    <section>
    <h1 className='text-3xl flex items-center font-montserrat text-coral-red'>Login</h1>
    <UserInput placeholder='student@mail.com' value={username} onChange={handleUsernameChange}/>
    <div className='mt-5'>
    <PasswordInput placeholder='password' value={password} onChange={handlePasswordChange}/>
    </div>
    <div className='mt-5'>
        <Button label='SIGN IN' onClick={handleSubmit}/>
    </div>
    <div className='flex text-center text-coral-red items-center justify-center text-xl'>
      <Display todisplay={login2(returnData2,username,password).message}/>
    </div>
    <div>
      hi{returnData2.length}
    </div>
    <ul>
        {returnData2.map((student, index) => (
          <li key={index}>
            ID: {student.StudentId}, Username: {student.username}, Password: {student.password}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Login