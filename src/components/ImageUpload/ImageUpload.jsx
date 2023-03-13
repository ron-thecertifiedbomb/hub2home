import React, {useState} from 'react'

const ImageUpload = () => {

  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    if(event.target.files.length > 0){
      setSelectedFile(event.target.files[0]);
    }
  };

  const validateSelectedFile = () => {
    const MIN_FILE_SIZE = 1024 // 1MB
    const MAX_FILE_SIZE = 5120 // 5MB

    if (!selectedFile) {
      setErrorMsg("Please choose a file");
      setIsSuccess(false)
      return
    }

    const fileSizeKiloBytes = selectedFile.size / 1024

    if(fileSizeKiloBytes < MIN_FILE_SIZE){
      setErrorMsg("File size is less than minimum limit");
      setIsSuccess(false)
      return
    }
    if(fileSizeKiloBytes > MAX_FILE_SIZE){
      setErrorMsg("File upload is larger than 5 mb");
      setIsSuccess(false)
      return
    }

    setErrorMsg("")
    setIsSuccess(true)
  };

  return (
    <main> 
    <label className=' font-Roboto text-lg'>
    Upload image/file <span className="font-Roboto text-lg text-red-500">(Optional)</span>
  </label>
   <section className=' flex flex-col gap-3 sm:items-start md:flex md:flex-row md:gap-3 md:items-center mt-4 mb-4'>
    <div className=' flex w-[140px] h-[42px] bg-[#ff6700] rounded justify-center items-center cursor-pointer'>
        <label className=' font-Roboto text-[16px] font-medium text-[#ffffff] cursor-pointer' onClick={validateSelectedFile}>Upload</label>
    </div>
    
    <p className='font-Roboto text-[14px] font-normal text-[#cecece]'>Accepted File Types: .pdf .doc .gif .png .jpg .jpeg, Maximum iupload file size: 5mb. File number limit: 1</p>
    </section>  
    <input className='w-[250px] mb-3'
            type="file"
            name='file'
            accept=".pdf, .doc, .gif, .png, .jpg, .jpeg"
            onChange={handleFileChange}
          />
   {isSuccess ? <p className=" text-green-500">File ready to be uploaded</p> : null}
          <p className=" font-Roboto text-[16px] font-medium  text-red-500">{errorMsg}</p>
 </main>
  )
}

export default ImageUpload