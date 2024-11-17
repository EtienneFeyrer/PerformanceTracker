import React, { useState } from 'react';
import Button from './Button';
import UserInput from './UserInput';
import Mileage from '../../dbFiles/Mileage';
import { getID } from '../utility/performance';
import { validateDate } from '../utility/dateValidation'; // Ensure this matches the file name exactly

const PerformanceInput = ({ username, returnData2, date }) => {
  const [performance, setPerformance] = useState('');
  const formattedDate = date.toISOString().split('T')[0];
  const [Username, setUsername] = useState(localStorage.getItem('username') || '');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChangePerformance = (e) => {
    setPerformance(e.target.value);
  };

  const fetchPerformance = async () => {
    const mileageObject = new Mileage(getID(username, returnData2), formattedDate, performance);
    {/*console.log('Mileage Object:', JSON.stringify(mileageObject));*/} //for testing purpose
    try {
      const response = await fetch('http://localhost:5000/mileage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(mileageObject)
      });
      const data = await response.json();
      {/*console.log('Response Data:', data);*/} //for testing purpose
      setSuccessMessage('Stored successfully'); // Set success message on successful fetch
      setPerformance(''); // Clear the input field on successful transaction
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Error storing performance'); // Set error message on failure
    }
  };

  const handleClick = () => {
    const dateValidationMessage = validateDate(formattedDate);
    {/*console.log('Formatted Date:', formattedDate);*/} //for testing purpose
    if (dateValidationMessage !== 'Valid date') {
      setSuccessMessage(dateValidationMessage);
      return;
    }

    {/*console.log('Performance:', performance);*/} //for testing purpose
    {/*console.log('Username:', Username);*/} //for testing purpose
    {/*console.log("returnData2", returnData2);*/} //for testing purpose
    {/*console.log(new Mileage(getID(Username, returnData2), formattedDate, performance));*/} //for testing purpose
    fetchPerformance();
  };

  return (
    <div>
      <UserInput value={performance} placeholder="Leistung in Kilometern" onChange={handleChangePerformance} />
      <Button label={'Speicher Leistung'} onClick={handleClick}>Leistungs-Eingabe</Button>
      {successMessage && 
        <p style={{ color: successMessage === 'Stored successfully' ? 'green' : 'red' }}>
          {successMessage}
        </p>
      }
    </div>
  );
};

export default PerformanceInput;
