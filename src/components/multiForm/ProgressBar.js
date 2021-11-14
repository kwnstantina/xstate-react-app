import React from 'react';


const ProgressBar = (props) => {
    const {page}=props;
    const percent = page * 100;
    const percentage = page;

    const background = {
        backgroundColor: '#dee2e6',
        height: 8,
        width: 400,
        borderRadius: 20,
    }

    const progress = {
        backgroundColor: '#43aa8b',
        height: 8,
        width: percent,
        borderRadius: 20,
    }

    const text = {
        fontSize: 15,
        color: '#8d99ae',
    }

    return (
        <div>
            <p style={text}>{percentage} of 4 completed</p>
            <div style={background}>
            <div style={progress}>
            </div>
        </div>
        </div>
    );
};

export default ProgressBar;