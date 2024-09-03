import React from 'react';
import { Header, Sidebar, HomeCard } from '../Components/Component.js';
import { useSelector } from 'react-redux';

function Home() {
  const Bar = useSelector((state) => state.sideBar.sidebarShow);

  return (
    <>
      <Header />
      <div className="w-full flex">
        {/* Sidebar with smooth sliding */}
        <div className={`relative top-16 ${Bar ? "w-1/5" : "w-0"} transition-all duration-300`}>
          {Bar && <Sidebar />}
        </div>

        {/* Main Content */}
        <div
          className={`relative top-16 flex flex-wrap overflow-y-auto h-screen p-4 gap-4 ${
            Bar ? "w-4/5" : "w-full"
          } transition-all duration-300 pb-10`}
        >
          {/* Rendering multiple HomeCard components */}
          {Array(12).fill().map((_, index) => (
            <HomeCard key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
