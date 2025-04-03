import React from 'react';

const Button = ({ color = "green" }) => {
    // Function to change the background color
    const changeBackgroundColor = () => {
        // Apply the color passed as a prop to the body background
        document.body.style.backgroundColor = color;

    };

    return (
        <div>
            <button
                onClick={changeBackgroundColor}
                style={{
                    padding: '10px 20px',
                    backgroundColor: color,
                    color: '#FFF',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '10px',
                    height: '50px', // Add height
                    width: '150px', // Add width
                }}
            >
                Change Background to {color}
            </button>
        </div>
    );
};

export default Button;
