"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Web3Storage } from "web3.storage";

// Replace with your address path

const web3StorageClient = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEzRjlhNDRiODAyZDYwNzIyOTM3RTgxZWZlMWI5YjYyODhEMjM2MzEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTg0OTU3OTkxNzgsIm5hbWUiOiJzdG9yZSJ9.6M-5n5IXDrSHS6YpI1xmifVmoT1ndejAaak7igrBoqI",
});

const IPFSUpload = () => {
  const [cid, setCid] = useState("");

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const file = acceptedFiles[0];

      const filenamearr = file.name.split(".");
      const fileExtension = filenamearr[1];
      const cid = await web3StorageClient.put([file]);
      setCid(cid);
      console.log("File uploaded with CID:", cid);
      // Read the file using FileReader API
      const reader = new FileReader();

      reader.onload = async () => {
        const fileData = new Uint8Array(reader.result);

        // Upload the file to Web3.Storage
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error uploading and inserting data:", error);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex justify-center relative">
      <div className="flex justify-center flex-col items-center z-10">
        <div
          {...getRootProps()}
          className="flex flex-col justify-between items-center border-dashed border-2 border-black w-[500px] h-30 text-center cursor-pointer py-28"
        >
          <div>
            <Image src={"/document.png"} width={"100"} height={"100"} />
          </div>
          <div>
            <p className="font-bold text-5xl">Upload song details</p>
          </div>
          <div>
            <input {...getInputProps()} />
          </div>
          <div>
            <p>Drag and drop a file here, or click to select a file</p>
          </div>
        </div>

        <div>
          <p className="text-center">
            Document uploaded with the cid : {cid ? cid : "Loading .... "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IPFSUpload;
