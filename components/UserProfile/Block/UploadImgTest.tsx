import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import Cropper from 'react-easy-crop'

interface Props {
  setfileImgUser: Function,
  setIsUploadImg: Function
}

const UploadImgTest: React.FunctionComponent<Props>  =({ setfileImgUser,setIsUploadImg }: Props)=> {
  const CONTAINER_HEIGHT = 10
  const [isShowModal, setShowModal] = React.useState(false)
  const [crop, onCropChange] = React.useState({ x: 100, y: 100 })
  const [cropSize, onCropSizeChange] = React.useState({ width: 100, height: 100 })
  const [zoom, onZoomChange] = React.useState(1)
  const [fileUpload, setFileUpload] = useState("");
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await converBase64(file);
    setFileUpload(base64);
    setShowModal(true);
    setfileImgUser(base64);
    setIsUploadImg(false);
  }
  const converBase64 = (file) => {
    return new Promise((resolve, rejects) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        rejects(error);
      }
    })
  }
  return (
    <Fragment>
      <div className="login-content">
        <input type="file" onChange={(e) => { uploadImage(e); }} />
        {/* {isShowModal && (
          <div className="login-content">
            <div style={{ width: "500px", height: "500px", position: "relative", overflow: "hidden" }}>
              <Cropper
                image={fileUpload}
                crop={crop}
                zoom={zoom}
                cropSize={cropSize}
                onCropChange={onCropChange}
                onZoomChange={onZoomChange}
                aspect={4 / 3}
              />
            </div>
            <span onClick={e => (setShowModal(false))}>Huy Bo</span>
          </div>
        )} */}
      </div>
      <br />
    </Fragment>

  )
}
export default UploadImgTest
