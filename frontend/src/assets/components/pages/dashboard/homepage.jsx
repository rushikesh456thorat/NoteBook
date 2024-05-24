import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  document.title= "Welcome Dear!  🎉"

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-r min-w-full from-purple-400 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6">
      <header className="text-white text-center space-y-4">
        <h1 className="text-6xl font-bold leading-tight animate-fade-in">
          Your E-Notebook Awaits!  🎉
        </h1>
        <p className="text-2xl animate-slide-in">
          Organize your notes, thoughts, and ideas seamlessly.
        </p>
        <button className="btn btn-primary btn-lg animate-bounce" onClick={handleClick}>
          Get Started
        </button>
      </header>
      <div className="mt-10 animate-zoom-in">
        <img 
          src="/editorpre.png" 
          alt="Notebook Editor Interface" 
          className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HomePage;
