import Login from "./sections/Login";
import Performance from "./sections/Performance";
import Homepage from "./sections/Homepage";
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {

const[serverUrl, setServerUrl] = useState('http://localhost:5000');

const[returnData, setReturnData] = useState(['hiii there']);
const[returnData2, setReturnData2] = useState([]);
const[DailyMileage, setDailyMileage] = useState([]);
const[MonthlyMileage, setMonthlyMileage] = useState([]);
const[TotalMileage, setTotalMileage] = useState([]);

const[Dataurl, setDataurl] = useState('/api');

  const getData = async (Data) => {
      const newData = await fetch(Data, {
        method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnData(newData)
  }

  const getData2 = async (Data2) => {
    const newData2 = await fetch(Data2, {
      method: 'GET',
    headers:{
      'Accept': 'application/json'
    }
  })
  .then(res => res.json());
  console.log(newData2);
  setReturnData2(newData2);
}

const getDailyMileage = async (Data) => {
  const DailyMileage = await fetch(Data, {
    method: 'GET',
  headers:{
    'Accept': 'application/json'
  }
})
.then(res => res.json());
console.log(DailyMileage);
setDailyMileage(DailyMileage);
}

const getMonthlyMileage = async (Data) => {
  const MonthlyMileage = await fetch(Data, {
    method: 'GET',
  headers:{
    'Accept': 'application/json'
  }
})
.then(res => res.json());
console.log("MonthlyMileage", MonthlyMileage);
setMonthlyMileage(MonthlyMileage);
}

const getTotalMileage = async (Data) => {
  const TotalMileage = await fetch(Data, {
    method: 'GET',
  headers:{
    'Accept': 'application/json'
  }
})
.then(res => res.json()); 
console.log("TotalMileage",TotalMileage);
setTotalMileage(TotalMileage);
}

  useEffect(() => {
    getData(String(serverUrl + Dataurl));
  }, [serverUrl, Dataurl]);
  
  useEffect(() => {
    getData2(serverUrl + '/students');
  }, []);

  useEffect(() => {
    console.log('useEffect is running for DailyMileage');
    getDailyMileage('http://localhost:5000/mileage/daily')
    console.log(DailyMileage);}
  , []);

  useEffect(() => {
    console.log('useEffect is running for MonthlyMileage');
    getMonthlyMileage('http://localhost:5000/mileage/monthly')
    console.log(MonthlyMileage);}
  , []);

  useEffect(() => {
    console.log('useEffect is running for TotalMileage');
    getTotalMileage('http://localhost:5000/mileage/total')
    console.log(TotalMileage);}
  , []);

  const [username, setUsername] = useState('');
  return (
      <Router>
        <main className="relative">
          <div className="App"> 
            <button onClick={() => {setDataurl('/quit');
              getData(String(serverUrl + Dataurl));
            }}>
              Click
            </button>
            {returnData.message}
          </div>
          <div  className="App2"> 
            {returnData2.length}
          </div>
          <Routes>
            <Route path='/' element={<Login setUsername={setUsername} username={username} returnData2={returnData2} />} />
            <Route path='/homepage' element={<Homepage username={username} DailyMileage={DailyMileage} MonthlyMileage={MonthlyMileage} TotalMileage={TotalMileage} returnData2={returnData2} />} />
            <Route path='/homepage/performance' element={<Performance username={username} returnData2={returnData2}/>} />
          </Routes>
        </main>
      </Router>
    );
};
export default App;