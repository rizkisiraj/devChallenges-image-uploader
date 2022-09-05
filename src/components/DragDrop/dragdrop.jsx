import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import DragArea from "../DragArea/dragArea";
import Loading from "../Loading/loading";
import Uploaded from "../Uploaded/uploaded.component";
import axios from 'axios'

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [link, setLink] = useState("");
  const handleFileChange = async (e) => {
    setFile(e.target.files[0]);
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'oeple9rg');
    setIsUploading(true);

    const { data } = await axios.post('https://api.cloudinary.com/v1_1/ddmxosnhy/image/upload', formData);
    setLink(data.url)
    setIsUploading(false)
    
  }

  const handleChange = async (file) => {
    setFile(file);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'oeple9rg');
    setIsUploading(true);

    const { data } = await axios.post('https://api.cloudinary.com/v1_1/ddmxosnhy/image/upload', formData);
    setLink(data.url)
    setIsUploading(false)
  };
  
  return isUploading ? <Loading /> : (link ? <Uploaded pictLink={link}  /> :  (
    <div className="w-full max-w-[412px] mx-auto shadow-xl py-9 px-8 rounded-lg flex flex-col">
          <div className="mb-7">
              <h1 className="text-lg text-center">Upload your image</h1>
              <span className="text-xs text-center mx-auto block text-slate-400 mt-4">File should be Jpeg,Png..</span>
          </div>
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} children={<DragArea />} />
          <span className="text-slate-400 text-xs mx-auto block my-5 ">Or</span>
          <label className="mx-auto text-xs bg-[#2F80ED] px-4 py-2 text-white rounded-md">
            Choose a file
            <input onChange={handleFileChange} className="hidden" type="file" size={60} />
          </label>
      </div>
  ))

      
}

export default DragDrop;