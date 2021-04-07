import React, { useEffect, useState, Fragment, useRef, useCallback } from 'react'
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface Props {
  setIsUploadImg: Function
}

interface Image {
  file: string,
  dataUrl: string
}
function getResizedCanvas(canvas, newWidth, newHeight) {
  const tmpCanvas = document.createElement("canvas");
  tmpCanvas.width = newWidth;
  tmpCanvas.height = newHeight;

  const ctx = tmpCanvas.getContext("2d");
  ctx.drawImage(
    canvas,
    0,
    0,
    canvas.width,
    canvas.height,
    0,
    0,
    newWidth,
    newHeight
  );

  return tmpCanvas;
}
interface Images {
  list: Array<Image>
}
const UploadImg: React.FunctionComponent<Props> = ({ setIsUploadImg }: Props) => {
  const [upImg, setUpImg] = useState<any>(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "px", width: 30, height: 30, maxWidth: 50, maxHeight: 50, aspect: 9 / 16 });
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [isShowModal, setShowModal] = useState(false);
  const [result, setCropResult] = useState<Images>({ list: [] });
  const [fileName, setFileName] = useState('');
  const [menuRef, setMenuRef] = useState(React.useRef(null));

  function generate(previewCanvas, crop): void {
    console.log(crop)
    setIsUploadImg(false)

    // if (!crop || !previewCanvas) {
    //   return;
    // }
    // const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
    // let dataUrl = canvas.toDataURL("image/png");
    // const data = {
    //   file: fileName != '' ? `croped_${fileName}.png` : 'croped.png',
    //   dataUrl: dataUrl
    // }
    // console.log(previewCanvasRef);
    // const cropedDatas = result.list;
    // cropedDatas.push(data);
    // const datas = {
    //   ...result,
    //   list: cropedDatas
    // };
    // setCropResult(datas);
    // setShowModal(false);
  }

  function handleClick(event: any): void {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowModal(false);
    }
  }

  const handleClickOutside = (): any => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  };

  useEffect(() => {
    handleClickOutside();
  }, [isShowModal]);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }
    const pixelRatio = (window != undefined ? window.devicePixelRatio : 1);

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const handleUploadFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setShowModal(true);
      setFileName(e.target.files[0].name);
      console.log(imgRef.current);
      e.target.value = '';
    }
  };

  const onChangeImg = (e) =>{
    console.log(e.target.files)
    // setUpImg(img)
  }

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const removeImage = (index) => {
    let newList = result.list;
    if (index > -1) {
      newList.splice(index, 1);
    }
    const datas = {
      ...result,
      list: newList
    };
    setCropResult(datas);
  }
  return (
    <div className="login-content">
      <a href="#" className="close">x</a>
      {upImg == null &&(
        <input ref={imgRef} type="file" onChange={(e)=>onChangeImg(e)}/>
      )}
      {upImg != null && (
        <div>
          <ReactCrop
            src={upImg}
            onImageLoaded={onLoad}
            crop={crop}
            onChange={(c) => setCrop(c)}
            onComplete={(c) => setCompletedCrop(c)}
          />
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a className="btn btn-2 s180" onClick={() => setShowModal(false)}>Huỷ bỏ</a> &nbsp;&nbsp;
                  <a
              className="btn s280 btnModal"
              data-modal="modalNoti"
              onClick={() => generate(previewCanvasRef.current, completedCrop)}>Chỉnh sửa</a>
          </div>
        </div>
      )}
    </div>
  )
}
export default UploadImg