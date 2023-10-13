import React, { useState } from 'react';
import '../App.css';

export default function ColorPicker() {
    const [backgroundColor, setBackgroundColor] = useState('');

    const handleColor = (color) => {
        setBackgroundColor(color);
    }

    return (
        <div id="cen">
                <h2 style={{marginBottom:'15px',fontSize:'40px'}}>Pick a color</h2>
            <div className='card' style={{ backgroundColor: backgroundColor }}>
                <ul>
                    <li onClick={() => handleColor('red')} id='one'></li>
                    <li onClick={() => handleColor('rgba(101, 190, 23, 0.961)')} id='two'></li>
                    <li onClick={() => handleColor('blue')} id='three'></li>
                    <li onClick={() => handleColor('yellow')} id='four'></li>
                    <li onClick={() => handleColor('violet')} id='five'></li>
                    <li onClick={() => handleColor('rgb(47, 177, 217)')} id='six'></li>
                    <li onClick={() => handleColor('orange')} id='seven'></li>
                    <li onClick={() => handleColor('rgb(60, 4, 60)')} id='eight'></li>
                    <li onClick={() => handleColor('pink')} id='nine'></li>
                    <li onClick={() => handleColor('green')} id='ten'></li>
                    <li onClick={() => handleColor('cyan')} id='eleven'></li>
                    <li onClick={() => handleColor('brown')} id='twelve'></li>
                    <li onClick={() => handleColor('olive')} id='thirteen'></li>
                    <li onClick={() => handleColor('grey')} id='fourteen'></li>
                    <li onClick={() => handleColor('teal')} id='fifteen'></li>
                </ul>
            </div>
        </div>
    );
}
