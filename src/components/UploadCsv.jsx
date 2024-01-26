import React, { useRef, useState, useEffect } from "react";
import { ExcelIcon, DocUploadIcon } from "../assets/icons";
import Papa from 'papaparse';
import DataUploads from "./DataUploads";

function UploadCsv() {
  const fileInputRef = useRef(null);
  const [data, setData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e?.target?.files[0];
    if (file) {
      setSelectedFile(file);
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
        },
      });
    }
  };

  const renderTags = (tags) => {
    if (!tags) return null;

    return tags.split(',').map((tag, tagIndex) => (
      <span key={tagIndex}>{tag.trim()} </span>
    ));
  };


  const handleRemoveFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = null;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>

      {/* 1st componensts */}
      <div className='visible md:invisible md:flex items-center pb-5 '>
        <span className='text-black-10 text-2xl font-medium font-figtree leading-8'>Uploads CSV</span>
      </div>
      <div
        className="flex justify-center items-center" >
        <div className="box-content h-auto w-full md:w-1/2 p-4 rounded-xl bg-white-20">
          <label
            htmlFor="fileInput"
            className="border-dashed border-2 h-60 text-gray-dashed rounded-xl flex flex-col justify-center items-center cursor-pointer"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <input
              type="file"
              id="fileInput"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept=".csv"
              onChange={(e) => handleFileUpload(e)}
            />
            <ExcelIcon />
            <h1 className="text-center">
              {selectedFile ? (
                <>
                  <span className="text-blue-10">{selectedFile.name}</span>
                  <p
                    className="text-red-remove cursor-pointer"
                    onClick={handleRemoveFile}
                  >
                    Remove
                  </p>
                </>
              ) : (
                <>
                  Drop your excel sheet here or{" "}
                  <span className="text-blue-10"> browse</span>
                </>
              )}
            </h1>
          </label>
          <div
            className={`justify-center gap-2 flex items-center rounded-md p-2 mt-3 text-white-10 bg-blue-10 cursor-pointer }`}
          >
            <DocUploadIcon />
            Upload
          </div>
        </div>

      </div>


      {/* <2nd component /> */}

      <DataUploads data={data} />
    </>

  );
}

export default UploadCsv;
