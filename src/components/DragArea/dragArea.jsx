import {ReactComponent as MountainImage} from '../../image.svg'

const DragArea = () => {
    return (
        
        <div className="bg-[#F6F8FB] w-full flex justify-center p-9 flex-col items-center font-sans gap-9 rounded-xl border-dashed border-2 border-[#97BEF4]">
            <MountainImage />
            <span className='text-xs text-gray-500'>Drag & Drop your image here</span>
        </div>
    )
}

export default DragArea;