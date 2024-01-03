import { useContext, useEffect, useState } from 'react';
import BoardContext from '../../context/BoardContext';

const ColumnBall = ({ id }) => {
  const [color, setColor] = useState('');
  const [colorsArray, setColorsArray] = useState([
    { id: 0, color: '#49C4E5' },
    { id: 1, color: '#8471F2' },
    { id: 2, color: '#67E2AE' },
  ]);
  const { columns } = useContext(BoardContext);

  const getRandomHexColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const doesIdExist = colorsArray.find(colorObj => colorObj.id === id);
    if (doesIdExist) {
      setColor(doesIdExist.color);
    } else {
      const newColor = getRandomHexColor();
      setColor(newColor);
      setColorsArray(prev => [...prev, { id: id, color: newColor }]);
    }
  }, [columns, id]);

  return <div className="rounded-full w-[15px] h-[15px]" style={{ backgroundColor: color }}></div>;
};

export default ColumnBall;
