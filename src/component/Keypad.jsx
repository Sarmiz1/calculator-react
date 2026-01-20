import { AiOutlineClose  } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";

function Keypad({ onKeyPress, mode = 'light' }) {



  const keys= [
    { label: '⌫', value: 'backspace', id: 'backspace' },
    {label:<AiOutlineClose size={25} />, value: 'clear', id: 'clear' },
    {label:'√', value: '√', id: 'squareRoot' },
    {label:'÷', value: '÷' , id: 'divide'},
    {label:'×', value: '×', id: 'multiply'},
    {label:'=', value: '=', id: 'equals' },
    { light: <BsMoon size={25} />, 
    dark: <BsSun size={25} /> ,
    value: 'mode', id: 'mode' },
    { label: '.', value: '.', id: 'decimal' },
    { label: '1', value: '1', id: '1'},
    { label: '2', value: '2', id: '2'},
    { label: '3', value: '3', id: '3'},
    { label: '+', value: '+', id: 'add'},  
    { label: '4', value: '4', id: '4'},
    { label: '5', value: '5', id: '5'},
    { label: '6', value: '6', id: '6'},  
    { label: '-', value: '-', id: 'subtract'},  
    { label: '7', value: '7', id: '7'},
    { label: '8', value: '8', id: '8'},
    { label: '9', value: '9', id: '9'},
    { label: '0', value: '0', id: '0'},
  ]



    

  return (
    <div className="grid grid-cols-4 gap-5 w-full md:w-5/6 lg:w-4/6 sm:grid-cols-5">
      {keys.map((key) => 
        <button
          className="h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] bg-gray-200 
          dark:bg-gray-700 rounded-full flex items-center 
          justify-center text-xl font-bold border-2 dark:border-gray-600
          border-black dark:border-violet-900 sm:ml-6 hover:scale-105 
          active:scale-95 transition-all duration-100 ease-in-out"
          key={key.id}
          onClick={() => onKeyPress(key.value)}
          >
            {key.id === 'mode' ?
              (mode === 'light' ? key.light : key.dark)
              :
              key.label
            }
        </button>
      )}

    </div>
  );
}

export default Keypad;