import React from "react";
import { sampledata } from '../data/sample-data';
import TagSlector from "../Popover/TagSlector";
import { ChevronDownIcon } from '../assets/icons'

function DataUploads() {

  
  return (
    <div className='rounded-3xl'>
      <div className='hidden md:flex items-center py-5 '>
        <span className='text-black-12 text-xl font-medium'>Upload CSV</span>
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
          <tbody>
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
                <TagSlector />
              </td>
              <td className="px-6 py-4 font-figtree text-gray-lightbulma ">
                Selected Tags
              </td>
            </tr>

          </tbody>
        )}

      </table>
    </div>
  )
}

export default DataUploads;
