import { useState } from 'react';
import './CustomCursor.css';
import Slider from '/src/components/Slider.jsx';
import Button from '/src/components/Button.jsx';
import UseDotAndCircle from './cursor-hooks/UseDotAndCircle';
import UseFiveYellowCircles from './cursor-hooks/UseFiveYellowCircles';
import UseSpinningSquare from './cursor-hooks/UseSpinningSquare';

function CustomCursor() {

  const NUM_CURSORS = 3;
  const [cursorStyle, setCursorStyle] = useState(0);

  const handleCursorStyleChange = () => {
    if(cursorStyle < NUM_CURSORS - 1)
      setCursorStyle(cs => cs + 1);
    else
      setCursorStyle(0);
  }

  const [duration, setDuration] = useState(1000);

  //cursor 0
  UseDotAndCircle(duration, cursorStyle);

  //cursor 1
  UseFiveYellowCircles(duration, cursorStyle);
  
  //cursor 2
  UseSpinningSquare(duration, cursorStyle);

  return (
    <div id='custom-cursor'>
      <div style={cursorStyle === 0 ? {opacity:'1'} : {opacity: '0'}}>
        <div className='cursor-dot-1 universal-cursor' data-cursor-dot-1></div>
        <div className='cursor-outline-1 universal-cursor' data-cursor-outline-1></div>
      </div>
      <div style={cursorStyle === 1 ? {opacity: '1'} : {opacity: '0'}}>
        <div className='cursor-dot-2 universal-cursor bg-yellow-600' data-cursor-dot-2-0/>
        <div className='cursor-dot-2 universal-cursor opacity-75' data-cursor-dot-2-1/>
        <div className='cursor-dot-2 universal-cursor opacity-50' data-cursor-dot-2-2/>
        <div className='cursor-dot-2 universal-cursor opacity-25' data-cursor-dot-2-3/>
        <div className='cursor-dot-2 universal-cursor opacity-5' data-cursor-dot-2-4/>
      </div>
      <div style={cursorStyle === 2 ? {opacity: '1'} : {opacity: '0'}}>
        <div className='cursor-outline-3 universal-cursor' data-cursor-outline-3></div>
        <div className='cursor-dot-3 universal-cursor' data-cursor-dot-3></div>
      </div>
      <div className='flex justify-center'>
        <Slider defaultValue={duration} max={2000} label={"Animation Delay"} Callback={setDuration} />
        <Button label={"Change Cursor"} Callback={handleCursorStyleChange} />
      </div>
    </div>
  );
}

export default CustomCursor;