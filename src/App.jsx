import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs';
import ScreenDispay from './component/Screen.jsx'
import Keypad from './component/Keypad.jsx'

function App() {
  

  const [displayData, setDisplayData] = useState(0);
  const [inputData, setInputData] = useState(''); 

  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('mode');
    return savedMode ? savedMode : 'light';
  });

  
  const onKeyPress = (key) => {
    const operators = ['+', '-', '×', '÷', '=',];

    if(inputData === '0' && key === 'mode') {
      setInputData('0');
    } else if(inputData === '0' && !operators.includes(key)) {
        setInputData(key);
        return;
      }


      if(inputData.includes('.') && key === '.') return;

    if(displayData === 'Error') setDisplayData(0);


    if(operators.includes(key) && inputData === '') return;
    if(operators.includes(key) && operators.includes(inputData.slice(-1))) return;

    if (typeof key === 'string' && key.length === 1) {
      setInputData(prev => prev + key);
    }


    if (key === 'backspace') {
      setInputData(prev => {
      const next = prev.slice(0, -1);
      if (next === '') setDisplayData(0);
      return next;
      });
    }

    else if (key === 'clear') {
      setInputData('')
      setDisplayData(0)
    }

    else if (key === '=') {
      try{

        if (!inputData) return;

        const preparedInput = inputData
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/√(\d+(\.\d+)?)/g, 'sqrt($1)');

          

        const result = evaluate(preparedInput);

        if (!isFinite(result)) {
          throw new Error();
        }

        setDisplayData(result);
        setInputData('');

      } 
      catch (error) {
        setDisplayData('Error');
        setInputData('');
      }
    }


    else if (key === 'mode') {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    }
  }

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);





  return (
    <>
      <div className='flex flex-col min-h-dvh items-center p-4'>
        <ScreenDispay
          displayData={displayData}
          inputData={inputData}
        />
        <Keypad 
          onKeyPress={onKeyPress}
          mode={mode} 
        />
      </div>
    </>
  )
}

export default App
