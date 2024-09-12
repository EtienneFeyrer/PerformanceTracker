import React from 'react'
import Button from './Button'
import UserInput from './UserInput'
import { useState } from 'react'
import Mileage from '../../dbFiles/Mileage'
import { getID } from '../utility/performance'


const PerformanceInput = ({username,returnData2, date}) => {
  const [performance, setPerformance] = useState('');
  const formattedDate = date.toISOString().split('T')[0];
  const [Username, setUsername] = useState(localStorage.getItem('username') || '');

  const handleChangePerformance = (e) => {setPerformance(e.target.value);};

  const fetchPerformance = async () => {
    const mileageObject = new Mileage(getID(username, returnData2), formattedDate, performance);
    console.log('Mileage Object:', JSON.stringify(mileageObject));
    try{
      const response = await fetch('http://localhost:5000/mileage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(mileageObject)
      })
      const data = await response.json();
      console.log('Response Data:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  const handleClick = () => {
    console.log('Performance:', performance);
    console.log('Username:', Username);
    console.log("returnData2", returnData2);
    console.log(new Mileage(getID(Username, returnData2), formattedDate, performance));
    fetchPerformance();
  };
     

  
  return (
    <div>
     <UserInput value={performance} placeholder="Enter your performance (in kilometers)" onChange={handleChangePerformance}/>
 <Button label={'Add Performance'}onClick={handleClick}>PerformanceInput</Button>
    </div>
   
  );
};

export default PerformanceInput