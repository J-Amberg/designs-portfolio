import PropTypes from 'prop-types';

export default function Button ({Callback, label="Button"}) {
    return <button onClick={() => Callback()} className='text-blue-300 w-[300px] h-[100px] mx-[20px] bg-gray-800'>{label}</button>
}

Button.propTypes = {
    Callback: PropTypes.func.isRequired,
    label: PropTypes.string
}   