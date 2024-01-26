import React from "react";
import { ChevronDownIcon } from "../assets/icons";

function TagSelector({ tags, value, onChange }) {
  return (
    <div className='relative text-gray-drop py-3 px-2 rounded-tr-md rounded-br-md bg-white-20'>
     
      <select
        value={value}
        onChange={onChange}
        className='appearance-none h-9 border rounded-md text-base cursor-pointer px-4 pr-10 outline-none bg-white-20'
      >
        <option value='default' className="text-black-10">Select Tags</option>
        {tags.map((tag, index) => (
          <option key={index} className="text-black-10" value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center mr-3 mt-1'>
        <ChevronDownIcon width={16} height={16} />
      </div>
    </div>
  );
}

export default TagSelector;

