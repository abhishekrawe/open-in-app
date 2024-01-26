import React from "react";
import { ChevronDownIcon } from "../assets/icons";

function TagSelector({ tags, value, onChange }) {
  return (
    <div className='relative text-gray-drop bg-white-20'>
     
      <select
        value={value}
        onChange={onChange}
        className='appearance-none h-9 rounded border text-base cursor-pointer py-4 px-16 pr-20 outline-none bg-white-20'
      >
        <option disabled value='default' className="text-black-10">Select Tags</option>
        {tags.map((tag, index) => (
          <option key={index} className="text-black-10 py-5" value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center mr-3 mt-3'>
        <ChevronDownIcon width={16} height={16} />
      </div>
    </div>
  );
}

export default TagSelector;

