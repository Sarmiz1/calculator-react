import { useState } from 'react'
import ScreenDispay from './component/Screen.jsx'
import Keypad from './component/Keypad.jsx'

function App() {


  const [displayData, setDisplayData] = useState(0);
  const [inputData, setInputData] = useState(''); 

  const [mode, setMode] = useState('light');

  
  const onKeyPress = (key) => {
    setInputData((prev) => prev + key.toString());

    if (key === '⌫') {
      setInputData((prev) => prev.slice(0, -2));

      if (inputData.length <= 1) {
        setInputData('');
        setDisplayData(0);
      }
    } else if (key === '=') {
      try {
        const result = eval(inputData);
        setDisplayData(result);
        setInputData('');
      } catch (error) {
        setDisplayData('Error');
        setInputData('');
      }
    }
  };

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
