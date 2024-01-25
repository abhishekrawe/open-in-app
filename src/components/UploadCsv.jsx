import React, { useRef, useState, useEffect } from "react";
import { ExcelIcon, DocUploadIcon, SpinnerIcon } from "../assets/icons";

function UploadCsv() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isUploadComplete, setIsUploadComplete] = useState(false);

    const handleFileUpload = (file) => {
        setSelectedFile(file);
        console.log("Uploading file:", file);
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


    const handleOnClick = () => {
        if (isLoading) return;

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsUploadComplete(true);
        }, 1000);
    };

    return (
        <div
            className="flex justify-center items-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div className="box-content h-auto sm:w-11/12 md:w-2/5 p-4 rounded-xl bg-white-20">
                <label
                    htmlFor="fileInput"
                    className="border-dashed border-2 h-60 text-gray-dashed rounded-xl flex flex-col justify-center items-center cursor-pointer"
                >
                    <input
                        type="file"
                        id="fileInput"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={(e) => handleFileUpload(e.target.files[0])}
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
                    className={`justify-center gap-2 flex items-center rounded-md p-2 mt-3 text-white-10 bg-blue-10 cursor-pointer ${isUploadComplete ? "opacity-45" : ""}`}
                    onClick={handleOnClick}
                >
                    {isLoading ? (
                        <SpinnerIcon />
                    ) : (
                        <DocUploadIcon />
                    )}
                    Upload
                </div>
            </div>
        </div>
    );
}

export default UploadCsv;
