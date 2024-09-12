import { Router } from "react-router-dom"
import DateComponent from "../components/Date";
import "react-day-picker/style.css"
import PerformanceInput from "../components/PerformanceInput"
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import React, { useState, useEffect } from 'react';




const Performance = ({username, returnData2}) => {
  
  const [Username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    if (username) {
      console.log("ReturnData2" , returnData2);
      setUsername(username);
    localStorage.setItem('username', username);
  };
  }, [username]);
  
  const defaultClassNames = getDefaultClassNames();
  const [selected, setSelected] = useState(new Date());

  const handleDayClick = () => {
    console.log("Selected day:", selected);
    console.log(returnData2);
  };

  const css = `
  .my-today{
    
    font-weight: bold;
  }
   .my-selected{
   border: 1px solid #Ff4040;
   
   border-width: 2px;
   
   } 
   .my-nav-button{
     color: #Ff4040;
   }
   .my-footer{
   font-weight: bold;
   margin-top: 10px;
   padding: 10px;
   color: #Ff4040;}`

  
  return (
    <section 
    className="performance-section">
      <style>{css}</style>
      <h1 className="text-xl text-center font-montserrat text-slate-gray font-semibold mt-4"
      >
        Select a Date {Username}!
      </h1>
      
      <div className="mt-5 ">
        <DayPicker
        classNames={{
          today: "my-today",
          selected: "my-selected",
          root: `${defaultClassNames.root} custom-daypicker-root shadow-lg p-5`,
          chevron: `my-nav-button`, // Apply custom class here
          footer: `my-footer`,
        }}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          onDayClick={handleDayClick}
          footer=
          {selected ? selected.toLocaleString() : 'Please select a day'}
          modifiersClassNames={{
            selected: 'my-selected',
            today: 'my-today',
            footer: 'my-footer',
          }}
          showOutsideDays={true}
        />
      </div>
      
           
          <div className="mt-7 text-center"> Track your todays performance! </div>
          <div className="mt-2">
            <PerformanceInput username={Username} returnData2 ={returnData2} date ={selected}/>
          </div>
          
      
    </section>
  );
};
export default Performance