import { useEffect, useState } from "react";

const Loading = () => {
    const [bar,setBar] = useState(5);

    useEffect(() => {
        let newBar = bar;
        if(newBar >= 100) {
            newBar = 5;
        }
        setTimeout(() => setBar(newBar + 5), 1000);
    },[bar])

    return (
        <div className="shadow-lg rounded-xl p-8 w-full max-w-[412px] mx-auto">
            <h1 className="text-lg font-medium mb-4">Uploading...</h1>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div className="bg-[#2F80ED] h-2.5 rounded-full" style={{width: `${bar}%`}}></div>
            </div>
        </div>
    )
}

export default Loading;