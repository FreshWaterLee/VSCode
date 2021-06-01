import React,{Fragment, useState} from 'react';
import axios from 'axios'


const FileUpload =()=>{
    const [file,setFile] = useState();
    const [filename,setFilename] = useState('ChooseFile');
    const [uploadedFile,setUploadedFile] = useState({});
    const onChange =e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit =async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try{
            const res = await axios.post('/upload',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            });
            const {fileName,filePath}= res.data;
            setUploadedFile({fileName,filePath})
        }catch(err){
            if(err.response.status === 500){
                console.log('There was a Problem with the Server');
            }else{
                console.log(err.response.data.msg);
            }
        }
    }
    return (
        <Fragment>
            <form onSubmit = {onSubmit}>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange = {onChange}/>
                    <label htmlFor="customFile" className="custom-file-label">
                        {filename}
                    </label>
                </div>

                <input type="submit" value="Upload" className="btn btn-primary btn-block"/>
            </form>
        </Fragment>
    );
    }

export default FileUpload;