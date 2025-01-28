import React from 'react'

const Cover = ({img, title, subTitle}) => {
  return (
    <div className='h-[700px] flex flex-col gap-2 items-center justify-center  text-white' style={{backgroundImage: `url("${img}")`}}>
        <div className='bg-[#15151566] flex flex-col justify-center gap-2 w-4/5 h-3/5'>
           <p className='text-4xl text-center font-semibold'>{title}</p>
           <p className='text-center'>{subTitle}</p>
        </div>
    </div>
  )
}

export default Cover