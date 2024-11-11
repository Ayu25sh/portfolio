import { useState } from 'react';
import filterData from '../assets/Data/ProjectBar';
import Header from '../Common/Header';
import ProjectData from '../assets/Data/ProjectData';
import ProjectCards from '../Common/ProjectCards';
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


const Project = () => {
  const [category, setCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown menu
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsToggle(!isToggle);
  }

  const filterHandler = (title) => {
    setCategory(title);
    setIsOpen(false); // Close the dropdown after selecting
  };

  return (
    <div className="gap-10 m-4 sm:m-8 flex flex-col animate-">
      <Header title={"Projects"} />

      {/* Bar view for screens 640px and up */}
      <div className="hidden sm:flex flex-row gap-7">
        {filterData.map((data) => (
          <button
            className={`text-fs-2 text-light-gray transition-all duration-200 hover:text-opacity-50
              ${category === data.title ? "text-vegas-gold" : "text-light-gray"}
            `}
            key={data.id}
            onClick={() => filterHandler(data.title)}
          >
            {data.title}
          </button>
        ))}
      </div>

      {/* Custom Dropdown view for screens below 640px */}
      <div className="relative block sm:hidden w-full max-w-[640px] ">
        <button
          onClick={() => toggle()}
          className="w-full flex justify-between items-center px-5 py-3 text-fs-2 text-light-gray bg-eerie-black-2 border border-jet rounded-[16px] focus:outline-none"
        >
          <span className="space-x-2">{category}</span>
          <span>
            {
              isToggle ? (<MdKeyboardArrowDown />) :(<MdKeyboardArrowUp />)
            }
          </span>
        </button>

        {/* Dropdown Options with the same width as the button */}
        {isOpen && (
          <div className="text-fs-2 absolute left-0 mt-2 bg-eerie-black-2 border border-jet rounded-[16px] shadow-lg w-full z-10 ease-transition-1">
            {filterData.map((data) => (
              <button
                key={data.id}
                className={`block w-full px-4 py-2 text-left text-light-gray `}
                onClick={() => filterHandler(data.title)}
              >
                {data.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <ProjectCards category={category} data={ProjectData} />
      </div>
    </div>
  );
};

export default Project;
