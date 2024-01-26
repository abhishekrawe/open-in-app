import React, { useState } from "react";
import TagSelector from "../Popover/TagSlector"
import { ChevronDownIcon, LebelRemoveIcon } from '../assets/icons';

function DataUploads({ data }) {
  const [selectedTagsMap, setSelectedTagsMap] = useState({});

  if (!data || data.length === 0) {
    return <div></div>;
  }

  const columns = Object.keys(data[0]);

  const handleTagChange = (event, id) => {
    const selectedTag = event.target.value;

    setSelectedTagsMap((prevMap) => ({
      ...prevMap,
      [id]: [...(prevMap[id] || []), selectedTag],
    }));
  };

  return (
    <>
       <div className="p-5">
        <div className='md:flex items-center '>
          <div className='text-black-10 text-2xl font-medium font-figtree leading-8'>Uploads</div>
        </div>

        <div className="bg-white-30 p-4 rounded-lg">
          <div className="overflow-x-auto">
            <div className="flex rounded-md text-base font-figtree mb-2 p-3">
              {columns.map((column, index) => (
                <div key={index} className={`flex-none font-medium text-gray-lightbulma p-2 ${index === 0 ? 'pe-12' : ''} ${index === 0 ? '' : 'w-3/5 md:w-1/4 me-4 '}`}>
                  {column}
                </div>
              ))}

            </div>

            {data.map((row, index) => (
              <div key={index} className="flex md:bg-white-20 max-w-screen rounded-md text-base font-figtree mb-2 p-5 w-full ">
                <div className="flex-none font-medium text-gray-lightbulma me-4 p-2 pe-12 rounded">
                  {row.id}
                </div>
                <div className="flex-none text-blue-20 underline p-2 w-3/5 md:w-1/4 bg-white-20 rounded">
                  {row.links}
                </div>
                <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 md:w-1/4 bg-white-20  rounded">
                  {row.prefix}
                </div>

                <TagSelector
                  className="bg-white-20"
                  tags={row['select tags'].split(',').map((tag) => tag.trim())}
                  value={selectedTagsMap[row.id] || 'default'}
                  onChange={(event) => handleTagChange(event, row.id)}
                />
                {selectedTagsMap[row.id] &&
                  selectedTagsMap[row.id].map((tag, index) => (
                    <div key={index} className="flex-none inline-flex items-center px-2 mx-2 text-sm font-medium text-white-10 bg-blue-10 my-3 rounded">
                      {tag}<LebelRemoveIcon />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
       </div>    
    
    </>
  );
 }

export default DataUploads;
