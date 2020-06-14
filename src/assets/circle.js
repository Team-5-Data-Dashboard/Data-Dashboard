import React, { useState, useEffect } from 'react';

function SVGIcon(props) {
  const { race } = props;
  const { color, setColor } = useState('');

  const determineColor = (race) => {
    if (race === 'AMERICAN INDIAN/ALASKAN NATIVE') {
      setColor('rgba(255, 99, 132, 1)');
    } else if (race === 'BLACK') {
      setColor('rgba(54, 162, 235, 1)');
    } else if (race === 'BLACK HISPANIC') {
      setColor('rgba(255, 206, 86, 1)');
    } else if (race === 'WHITE HISPANIC') {
      setColor('rgba(75, 192, 192, 1)');
    } else if (race === 'WHITE') {
      setColor('rgba(153, 102, 255, 1)');
    } else if (race === 'ASIAN / PACIFIC ISLANDER') {
      setColor('rgba(255, 159, 64, 1)');
    } else {
      setColor('rgba(0, 0, 0, 0.1)');
    }
  };

  useEffect(() => {
    determineColor(race);
  });

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='19'
        height='19'
        viewBox='0 0 19 19'
      >
        <g
          id='Ellipse_14'
          data-name='Ellipse 14'
          fill={color}
          stroke='#fff'
          strokeWidth='1'
        >
          <circle cx='9.5' cy='9.5' r='9.5' stroke='none' />
          <circle cx='9.5' cy='9.5' r='9' fill='none' />
        </g>
      </svg>
    </>
  );
}

export default SVGIcon;
