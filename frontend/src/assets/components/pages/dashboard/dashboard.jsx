import React from 'react';
import FileMenu from './filemenu';
import NavBar from './navbar';
import ToolBar from './toolbar';
import Footer from '../../utils/footer'; // Import Footer component

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex-grow">
          <div className="w-full p-5 pt-0 items-center justify-center">
            <NavBar />
            <ToolBar />
            <FileMenu />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
