import React, { useState } from "react";
import { sampledata } from '../data/sample-data';
import TagSlector from "../Popover/TagSlector";
import { ChevronDownIcon, LebelRemoveIcon } from '../assets/icons';

function DataUploads() {
  const [selectedTagsMap, setSelectedTagsMap] = useState({});

  const tags = [
    { value: 'Tag 1', label: 'Tag 1' },
    { value: 'Tag 2', label: 'Tag 2' },
    { value: 'Tag 3', label: 'Tag 3' },
    { value: 'Tag 4', label: 'Tag 4' },
    { value: 'Tag 5', label: 'Tag 5' },
  ];

  const handleTagChange = (event, dataId) => {
    const selectedTagValue = event.target.value;
    setSelectedTagsMap((prevMap) => ({
      ...prevMap,
      [dataId]: prevMap[dataId] ? [...prevMap[dataId], selectedTagValue] : [selectedTagValue],
    }));
  };

  return (
    <>
        <div className='md:flex items-center py-5 '>
          <div className='text-black-10 text-2xl font-medium font-figtree leading-8'>Uploads</div>
        </div>

        <div className="overflow-x-auto">
        <div className="flex rounded-md text-base font-figtree mb-2 p-3">
          <div className="flex-none font-medium text-gray-lightbulma py-2 pe-12 ">SI No.  </div>
          <div className="flex-none font-medium text-gray-lightbulma p-2  w-3/5 md:w-1/4"> Links </div>
          <div className="flex-none font-medium text-gray-lightbulma p-2  w-3/5 md:w-1/4"> Prefixex </div>
          <div className="flex-none font-medium text-gray-lightbulma p-2  w-3/5 md:w-1/4"> Tags </div>
          <div className="flex-none font-medium text-gray-lightbulma p-2  w-3/5 md:w-1/6"> Selected Tags </div>
        </div>
        
        {sampledata.map((data) => (
          <div key={data.id} className="flex bg-white-20 rounded-md text-base font-figtree mb-2 p-5 w-full ">
            <div className="flex-none font-medium text-gray-lightbulma me-4 p-2 pe-12 ">{data.id}</div>
            <div className="flex-none text-blue-20 underline p-2 w-3/5 md:w-1/4">{data.links}</div>
            <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 md:w-1/4">{data.prefix}</div>

            <TagSlector
              tags={tags}
              value={selectedTagsMap[data.id] || 'default'}
              onChange={(event) => handleTagChange(event, data.id)}
            />
            {selectedTagsMap[data.id] &&
              selectedTagsMap[data.id].map((tag, index) => (
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
