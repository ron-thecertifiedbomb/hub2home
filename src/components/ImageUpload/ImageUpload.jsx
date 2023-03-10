import React from 'react'

const ImageUpload = () => {

  return (
    <main> 
    <label className=' font-Roboto text-lg'>
    Upload image/file <span className="font-Roboto text-lg text-red-500">(Optional)</span>
  </label>
   <section className=' flex gap-6 items-center mt-4 mb-4'>
    <div className=' flex w-[140px] h-[42px] bg-[#ff6700] rounded justify-center items-center'>
        <label className=' font-Roboto text-[16px] font-medium text-[#ffffff] cursor-pointer'>Select Files</label>
    </div>
    <p className=' font-Roboto text-[14px] font-normal text-[#cecece]'>Accepted File Types: .pdf .doc .gif .png .jpg .jpeg, Maximum iupload file size: 5mb. File number limit: 1</p>
    </section>  
    <label className=' text-[#e81d2c] text-[16px]'>File upload is larger than 5 mb.
  </label>
 </main>
  )
}

export default ImageUpload