import React from 'react';
import { Header, Sidebar, HomeCard } from '../Components/Component.js';
import { useSelector } from 'react-redux';

function Home() {
  const Bar = useSelector((state) => state.sideBar.sidebarShow);

  return (
    <>
      <Header />
      <div className="w-full flex">
        {/* Conditionally render Sidebar */}
        {Bar && (
          <div className="w-1/5 relative top-16 h-screen">
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div
          className={`${
            Bar ? 'w-4/5' : 'w-full'
          } flex flex-wrap overflow-y-auto h-screen relative top-16 p-4 gap-4`}
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
