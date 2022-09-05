import { useState } from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'

const Uploaded = ({pictLink = ""}) => {
    return (
        <div className="w-[412px] mx-auto shadow-xl py-9 px-8 rounded-lg flex flex-col items-center gap-5">
            <AiFillCheckCircle className='text-4xl text-green-500' />
            <h1 className='text-lg font-medium'>Uploaded Successfully!</h1>
            <div className='w-full bg-slate-300 h-52 rounded-xl'>
                <img src={pictLink} alt="an img" className='rounded-xl w-full h-full object-cover'/>
            </div>
            <div className='pl-3 py-1 pr-1 rounded-lg bg-[#F6F8FB] border border-[#E0E0E0] w-full flex'>
                <input type="text" name="link" id="link" value={pictLink} className="flex-grow mr-4 bg-transparent text-[8px] font-medium text-ellipsis" readOnly/>
                <button onClick={() =>  navigator.clipboard.writeText(pictLink)} className='w-20 text-[8px] font-medium px-5 py-3 bg-[#2F80ED] rounded-lg text-white'>Copy Link</button>
            </div>
        </div>
    )
}

export default Uploaded;