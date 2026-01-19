import { AiOutlineClose  } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";

function Keypad({ onKeyPress, mode = 'light' }) {



  const icons = {
  backSpace: '⌫',
  clear: <AiOutlineClose size={25} />,
  squareRoot: '√',
  divide: '÷',
  multiply: '×',
  equals: '=',
  mode: { light: <BsMoon size={25} />,
          dark: <BsSun size={25} /> }
  };


  
  const keys = [
    icons.backSpace, icons.clear, icons.divide, icons.equals,
    '1', '2', '3', '+',
    '4', '5', '6', '-',
    '7', '8', '9', icons.squareRoot,
    icons.multiply, '0', '#', icons.mode.light
  ];

  return (
    <div className="grid grid-cols-4 gap-5 w-full md:w-5/6 lg:w-4/6 sm:grid-cols-5">
      {keys.map((key) => 
        <button
          className="h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] bg-gray-200 
          dark:bg-gray-700 rounded-full flex items-center 
          justify-center text-xl font-bold border-2 dark:border-gray-600
          border-black dark:border-violet-900 sm:ml-6 hover:scale-105 
          active:scale-95 transition-all duration-100 ease-in-out"
          key={key === icons.mode.light ? 'mode' : key.toString()}
          onClick={() => onKeyPress(key)}
          >
            {key === icons.mode.light ?
              (mode === 'light' ? icons.mode.light : icons.mode.dark)
              :
              key
            }
        </button>
      )}

    </div>
  );
}

export default Keypad;