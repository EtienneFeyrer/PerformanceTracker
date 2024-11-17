import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import DateComponent from '../components/Date';
import { getPerformance, getPerformanceToday, getSpot, getPerformanceMonth, getID } from '../utility/performance';
import ChartComponent from '../components/CO2Chart';
import '../assets/styles.css'; 


const Homepage = ({ username, DailyMileage, MonthlyMileage, TotalMileage, returnData2 }) => {
    const [Username, setUsername] = useState(localStorage.getItem('username') || '');

    useEffect(() => {
        if (username) {
            setUsername(username);
            localStorage.setItem('username', username);
        }
    }, [username]);

    const navigate = useNavigate();

    const handleAddPerformance = () => {
        navigate('/homepage/performance');
    }

    return (
        <section>
            <h1 className="text-2xl font-palanquin font-semibold text-slate-gray">Wilkommen zurück {Username}</h1>
            <p className="text-slate-gray">
                <DateComponent />
            </p>
            <div className="mt-5 text-slate-gray font-palanquin">
                Deine Platzierung: <span className="border border-coral-red rounded-full w-max inline-block">
                    {getSpot(getID(Username, returnData2), TotalMileage)}
                </span>
            </div>
            <p className="text-slate-gray font-palanquin">
                Leistung heute: <span className="border border-coral-red rounded-full w-max inline-block mt-2">
                    {getPerformanceToday(getID(Username, returnData2), DailyMileage)}
                </span>
            </p>
            <p className="text-slate-gray font-palanquin mt-2">
                Leistung diesen Monat:
                <span className="border border-coral-red rounded-full w-max inline-block">
                    {getPerformanceMonth(getID(Username, returnData2), MonthlyMileage)}
                </span>
            </p>
            <div className="mt-5">
                <Button label="+ Leistung" onClick={handleAddPerformance} />
            </div>
            <div className='spacer'>

            </div>
            <div className="App">
                <ChartComponent kilometers={getPerformanceMonth(getID(Username, returnData2), MonthlyMileage)} />
            </div>
            <div className='spacer'>
              
              </div>
        </section>
    );
}

export default Homepage;
