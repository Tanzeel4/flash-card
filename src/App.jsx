import { useState } from 'react';
import './App.css';

function App() {
  const [value1, setValue1] = useState('What language is React based on❓');
  const [value2, setValue2] = useState('What are the building blocks of React apps❓');
  const [value3, setValue3] = useState('What method is used to update state in a class component❓');
  const [value4, setValue4] = useState('Which hook allows you to perform side effects in a functional component❓');
  const [value5, setValue5] = useState('What is the default value of the key prop in React❓');
  const [value6, setValue6] = useState( 'What function do you use to create a new context in React❓');

  // Functions to update values on click
  const updateValue1 = () => setValue1('⭐JavaScript');
  const updateValue2 = () => setValue2('⭐Components, Props, State');
  const updateValue3 = () => setValue3('⭐setState');
  const updateValue4 = () => setValue4('⭐useEffect');
  const updateValue5 = () => setValue5('⭐None');
  const updateValue6 = () => setValue6('⭐createContext');

  return (
    <div className='h-screen w-full flex justify-center items-center bg-gray-100'>
      {/* Container */}
      <div className='h-[80%] w-full flex justify-around flex-wrap items-center px-5 max-sm:p-5 max-sm:flex max-sm:flex-col max-sm:h-full max-sm:w-full'>
        {/* Card Components */}
        <Card value={value1} updaterHandler={updateValue1} index={0} />
        <Card value={value2} updaterHandler={updateValue2} index={1} />
        <Card value={value3} updaterHandler={updateValue3} index={2} />
        <Card value={value4} updaterHandler={updateValue4} index={3} />
        <Card value={value5} updaterHandler={updateValue5} index={4} />
        <Card value={value6} updaterHandler={updateValue6} index={5} />
      </div>
    </div>
  );
}

export default App;


const Card = ({ value, updaterHandler, index }) => {
  const [clicked, setClicked] = useState(false); // State to track if the card is clicked

  const colors = ['#e63946', '#1d4ed8', '#059669', '#d97706', '#7c3aed', '#db2777'];
 // Different colors

  const handleClick = () => {
    setClicked(true); // Mark card as clicked
    updaterHandler(); // Call updaterHandler to update the card text
  };

  return (
    <div
      className={`card h-[48%] w-[32%] max-sm:w-full max-sm:h-[15%] text-center flex items-center justify-center rounded-2xl p-8 cursor-pointer border-gray-300 border-4`}
      style={{ backgroundColor: clicked ? colors[index] : '#e2e8f0' }} // Set background color based on the index
      onClick={handleClick}
    >
      <h1 className={`text-xl max-sm:text-sm ${clicked ? 'font-extrabold text-2xl italic text-white' : 'text-black font-bold'}`}>
        {value}
      </h1>
    </div>
  );
};