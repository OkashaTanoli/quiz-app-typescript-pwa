import React, { useEffect } from 'react';
import './App.css';
import './components/quiz.css'
import Quiz from './components/quiz';
import FirebaseMessaging from './firebase/firebase';

function App() {
  useEffect(() => {
    FirebaseMessaging()
  }, [])
  return (
    <div className="App">
      <h1 className='quiz_app_heading'>Quiz App</h1>
      <Quiz />
    </div>
  );
}

export default App;
