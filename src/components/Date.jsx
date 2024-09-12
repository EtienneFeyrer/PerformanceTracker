
    import React, { useState, useEffect } from 'react';
    import {DayPicker, getDefaultClassNames} from 'react-day-picker';
    


     
    
    const DateComponent = ({MonthsOnly, GetDayPicker}) => {
    
    
        const [currentDate, setCurrentDate] = useState(new Date());
        const [content, setcontent] =useState('');
        const [selected, setSelected] = useState(new Date());
        const defaultClassNames = getDefaultClassNames();


        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentDate(new Date());
            }, 1000); // Update every second

            return () => {
                clearInterval(interval); // Clean up the interval on component unmount
            };
        }, []);

            useEffect(() => {
                if(MonthsOnly){
                    setcontent(currentDate.toLocaleString('default', { month: 'long' }));}
                else if(GetDayPicker){
                    setcontent(
                        <DayPicker
                        classNames={{
                            today: "border-coral-red",
                            selected: "bg-coral-red text-white",
                            root: '${defaultClassNames.root} shadow-lg p-5',
                            chevron: '${defaultClassNames.chevron} text-coral-red',
                            
                        }}
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={selected ? selected.toLocaleString() : 'Please select a day'}  
                        // Display days from other months
                        />
                    )}
                    else{setcontent(
                        currentDate.toLocaleString()
                    ) ;}
                }
            , [currentDate,MonthsOnly,GetDayPicker]
            );

            
    
        //handle and asign the content variable
        
    
        return (            
            <span>
                {content}
            </span>
        );
    };
    
    export default DateComponent;


