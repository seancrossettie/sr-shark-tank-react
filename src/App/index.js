import React, { useEffect, useState } from 'react';
import SharkTank from '../components/SharkTank';
import { dearlyBeloved, livingStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);

  return (
    <SharkTank
      liveStudents={liveStudents}
      setLiveStudents={setLiveStudents}
      deadStudents={deadStudents}
      setDeadStudents={setDeadStudents}
    />
  );
}

export default App;
