import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Slider({defaultValue = 0, label = "", min = 0, max, Callback}) {
    
    const [value, setValue] = useState(defaultValue)

    useEffect(() => {
        Callback(parseInt(value))
    }, [value, Callback])

    return <div className="bg-gray-800 w-[300px] h-[100px] p-5 text-center ">
        <h4 className='text-blue-300'>{label}</h4>
        <div className='flex justify-center'>
        <span className='text-blue-300'>{min}</span>
        <input className="range  accent-blue-300 mx-4 "
            type="range"
            value={value} 
            min={min}
            max={max}
            onChange={(e) => setValue(e.target.value)}>
        </input>
        <span className='text-blue-300'>{max}</span>
        </div>
    </div>
}

Slider.propTypes = {
    defaultValue: PropTypes.number,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    Callback: PropTypes.func
}