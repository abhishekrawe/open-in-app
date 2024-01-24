import React , {useState} from "react";
import { sampledata } from '../data/sample-data';
import TagSlector from "../Popover/TagSlector";
import { ChevronDownIcon, LebelRemoveIcon } from '../assets/icons'

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
    <div className='rounded-3xl'>
      <div className='hidden md:flex items-center py-5 '>
        <span className='text-black-12 text-xl font-medium'>Uploads</span>
      </div>
      <table className="w-full text-sm text-left bg-white-30 rounded-lg p">
        <thead className="text-md">
          <tr>
            <th scope="col" className="px-6 py-6 text-gray-lightbulma ">
              SI No.
            </th>
            <th scope="col" className="px-6 py-6 text-gray-lightbulma ">
              Links
            </th>
            <th scope="col" className="px-6 py-6 text-gray-lightbulma ">
              Prefix
            </th>
            <th scope="col" className="px-6 py-6 text-gray-lightbulma ">
              Add Tags
            </th>
            <th scope="col" className="px-6 py-6 text-gray-lightbulma ">
              Slected Tags
            </th>
          </tr>
        </thead>
        {sampledata.map((data) =>
          <tbody key={data.id}>
            <tr className="bg-white-20 rounded-md text-base font-figtree">
              <th scope="row" className="px-6 py-4 font-medium text-gray-lightbulma  whitespace-nowrap dark:text-white">
                {data.id}
              </th>
              <td className="px-6 py-4 text-blue-20 underline ">
                {data.links}
              </td>
              <td className="px-6 py-4 font-figtree text-gray-lightbulma ">
                {data.prefix}
              </td>
              <td className="px-6 py-4 font-figtree text-gray-lightbulma ">
                <TagSlector
                  tags={tags}
                  value={selectedTagsMap[data.id] || 'default'}
                  onChange={(event) => handleTagChange(event, data.id)}
                />
              </td>
              <td className="px-6 flex py-4 font-figtree text-gray-lightbulma ">
                {selectedTagsMap[data.id] &&
                  selectedTagsMap[data.id].map((tag, index) => (
                    <div key={index} className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-white-10 bg-blue-10 rounded dark:text-white-10" style={{ whiteSpace: 'nowrap' }}>
                      <span className="flex">{tag}<LebelRemoveIcon /></span>
                    </div>
                    
                  ))}
              </td>
            </tr>

          </tbody>
        )}

      </table>
    </div>
  )
}

export default DataUploads;
