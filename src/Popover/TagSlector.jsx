import React from "react";
import { ChevronDownIcon } from "../assets/icons";
import "../Popover/TagSlector"; // Import a CSS file for styling

function TagSelector() {
  return (
    <>
      <div className='relative text-gray-drop' >
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center mr-32'>
          <ChevronDownIcon width={16} height={16} />
        </div>
        <select
          defaultValue='default'
          className='appearance-none h-9 rounded border text-base  cursor-pointer py-[6px] px-[24px] pr-20 outline-none'
        >
          <option disabled value='default' className="text-black-10">Select Tags</option>
          <option  className="text-black-10 py-5"  value='tag1'>Tag 1</option>
          <option className="text-black-10 py-5" value='tag2'>Tag 2</option>
          <option className="text-black-10 py-5"  value='tag3'>Tag 3</option>
          <option className="text-black-10 py-5" value='tag3'>Tag 4</option>
          <option className="text-black-10 py-5" value='tag3'>Tag 5</option>
        </select>
      </div>
    </>
  );
}

export default TagSelector;
