import React, { useState } from "react";
import { sampledata } from '../data/sample-data';
import TagSelector from "../Popover/TagSlector"
import { ChevronDownIcon, LebelRemoveIcon } from '../assets/icons';

function DataUploads({ data }) {
  const [selectedTagsMap, setSelectedTagsMap] = useState({});

  if (!data || data.length === 0) {
    return <div>No data available</div>;
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
      <div className='md:flex items-center py-5 '>
        <div className='text-black-10 text-2xl font-medium font-figtree leading-8'>Uploads</div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex rounded-md text-base font-figtree mb-2 p-3">
          {columns.map((column, index) => (
            <div key={index} className={`flex-none font-medium text-gray-lightbulma p-2 ${index === 0 ? 'pe-12' : ''} w-3/5 md:w-1/4`}>
              {column}
            </div>
          ))}
        </div>

        {data.map((row, index) => (
          <div key={index} className="flex bg-white-20 rounded-md text-base font-figtree mb-2 p-5 w-full ">
            <div className="flex-none font-medium text-gray-lightbulma me-4 p-2 pe-12 ">{row.id}</div>
            <div className="flex-none text-blue-20 underline p-2 w-3/5 md:w-1/4">{row.links}</div>
            <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 md:w-1/4">{row.prefix}</div>

            <TagSelector
              tags={row['select tags'].split(',').map((tag) => tag.trim())}
              value={selectedTagsMap[row.id] || 'default'}
              onChange={(event) => handleTagChange(event, row.id)}
            />
            {selectedTagsMap[row.id] &&
              selectedTagsMap[row.id].map((tag, index) => (
                <div key={index} className="flex-none inline-flex items-center px-2 py-1 mx-4 text-sm font-medium text-white-10 bg-blue-10 rounded">
                  {tag}<LebelRemoveIcon />
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
 }

export default DataUploads;
