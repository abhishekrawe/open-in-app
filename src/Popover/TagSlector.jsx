import React from "react";
import { ChevronDownIcon } from "../assets/icons";

function TagSelector({ tags, value, onChange }) {
  return (
    <div className='relative text-gray-drop'>
      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center md:mr-36 lg:mr-36 xl:mr-36'>
        <ChevronDownIcon width={16} height={16} />
      </div>
      <select
        value={value}
        onChange={onChange}
        className='appearance-none h-9 rounded border text-base cursor-pointer py-[6px] px-[24px] pr-20 outline-none'
      >
        <option disabled value='default' className="text-black-10">Select Tags</option>
        {tags.map((tag, index) => (
          <option key={index} className="text-black-10 py-5" value={tag.value}>
            {tag.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagSelector;
