import React, { useState } from "react";
import './UploadPreview.scss';

const UploadPreview = () => {
    const [picture, setPicture] = useState(null);
    
    const onChangePicture = e => {
        setPicture(URL.createObjectURL(e.target.files[0]) );
    };

    return (
        <div className="upload-container">
            <div>
                <form>
                    <div className="upload-container-form">
                        <div className="upload-container-image">
                            <input className="upload-container-input" id="profilePic" type="file" onChange={onChangePicture}/>
                        </div>
                        <div className="previewProfilePic" >
                            <img alt="" className="playerProfilePic_home_tile" src={picture && picture}></img>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadPreview;