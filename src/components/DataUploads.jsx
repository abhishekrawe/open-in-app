import React, { useState } from "react";
import TagSelector from "../Popover/TagSlector"

function DataUploads({ data }) {
  const [selectedTagsMap, setSelectedTagsMap] = useState({});
  const [visibleBadges, setVisibleBadges] = useState({});

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

    setVisibleBadges((prevVisibleBadges) => ({
      ...prevVisibleBadges,
      [id]: true,
    }));
  };

  const handleBadgeDismiss = (id, index) => {
    setSelectedTagsMap((prevMap) => ({
      ...prevMap,
      [id]: prevMap[id].filter((_, i) => i !== index),
    }));

    if (selectedTagsMap[id].length === 0) {
      setVisibleBadges((prevVisibleBadges) => ({
        ...prevVisibleBadges,
        [id]: false,
      }));
    }
  };

  return (
    <>
      <div className="p-0 md:p-4 mt-5">
        <div className='md:flex items-center '>
          <div className='text-black-10 text-2xl font-medium font-figtree leading-8 mb-5'>Uploads</div>
        </div>

        <div className="bg-white-30 p-4 rounded-lg">
          <div className="overflow-x-auto">
            <div className="flex rounded-md text-base font-figtree mb-2 p-3">
              {columns.map((column, index) => (
                <div key={index} className={`flex-none text-gray-lightbulma figtree-font text-lg font-semibold leading-6 p-2 px-3 ${index === 0 ? 'pe-12' : ''} ${index === 0 ? '' : 'w-3/5 md:w-1/4 me-4 '}`}>
                  {column}
                </div>
              ))}

            </div>

            {data.map((row, index) => (
              <div key={index} className="flex md:bg-white-20 max-w-screen rounded-md text-base font-figtree mb-2 p-2 w-full">
                <div className="flex-none font-medium text-gray-lightbulma me-4 p-2 pe-12 rounded pt-4">
                  {row.id}
                </div>
                <div className=" whitespace-nowrap flex-none text-blue-20 underline p-2 px-5 w-3/5 md:w-1/4 bg-white-20 rounded-tl-md rounded-bl-md pt-4">
                  {row.links}
                </div>
                <div className="flex-none font-figtree text-gray-lightbulma p-2 w-3/5 px-5 md:w-1/4 bg-white-20 pt-4">
                  {row.prefix}
                </div>

                <div className="flex max-w-screen-2xl font-figtree bg-white-20 rounded-tr-md rounded-br-md">
                  <TagSelector
                    className="bg-white-20"
                    tags={row['select tags'].split(',').map((tag) => tag.trim())}
                    value={selectedTagsMap[row.id] || 'default'}
                    onChange={(event) => handleTagChange(event, row.id)}
                  />
                  {selectedTagsMap[row.id] &&
                    selectedTagsMap[row.id].map((tag, index) => (
                      <div key={index} className="flex-none inline-flex items-center px-2 mx-2 text-sm font-medium text-white-10 bg-blue-10 my-3 rounded">
                        {tag}
                        <button type="button" className="inline-flex items-center p-1 ms-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300" data-dismiss-target="#badge-dismiss-pink" onClick={() => handleBadgeDismiss(row.id, index)} aria-label="Remove">
                          <svg className="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                          </svg>
                        </button>
                      </div>
                    ))}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

export default DataUploads;
