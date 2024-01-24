import React from "react";
import { ExcelIcon, UploadIcon } from "../assets/icons";

function UploadCsv() {
    return (
        <div className="flex justify-center items-center">
            <div className="box-content h-auto sm:w-11/12 md:w-2/5 p-4 rounded-xl bg-white-20">
                <div className="border-dashed border-2 h-60 text-gray-dashed rounded-xl flex flex-col justify-center items-center">
                    <ExcelIcon />
                    <h1 className="text-center">
                        Drop your excel sheet here or <span className="text-blue-10"> browse</span>
                    </h1>
                </div>
                <div class="justify-center gap-2 flex items-center rounded-md p-2 mt-3 text-white-10 bg-blue-10">
                    <UploadIcon /> Upload
                </div>
            </div>
        </div>
    )
}

export default UploadCsv;
