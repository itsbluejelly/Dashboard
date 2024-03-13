"use client"

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function CopyBtn() {
  return (
    <div>
       <button className="font-bold text-black border p-2 rounded hover:bg-gray-200 flex w-[85%] mx-auto justify-evenly items-center">
            <ContentCopyIcon width={12} height={12}/>
            Copy to clipboard
        </button>
    </div>
  )
}

export default CopyBtn