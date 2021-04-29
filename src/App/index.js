import React, { useEffect, useState } from 'react';
import SharkTank from '../components/SharkTank';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
    followTheLight();
  }, []);

  console.warn(liveStudents);
  console.warn(deadStudents);

  return (
    <SharkTank liveStudents={liveStudents} setLiveStudents={setLiveStudents} />
  );
}

export default App;
