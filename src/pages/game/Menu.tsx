import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="menu-container z-20 flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-yellow-500 text-4xl font-bold mb-4">Game Title</h1>
      <h2 className="text-yellow-500 text-2xl mb-8">Select Game Mode</h2>
      <button onClick={startGame} className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700">Tutorial</button>
      <button onClick={startGame} className="bg-red-500 text-white py-2 px-4 rounded mb-4 hover:bg-red-700">PVP</button>
      <button onClick={startGame} className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-700">Single Player</button>
      <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900">Toggle UI Visibility</button>
    </div>
  );
};

export default Menu;
