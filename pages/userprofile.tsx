import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import Link from 'next/link';
import cookie from "js-cookie";
import { useRouter } from 'next/router';
import UploadImg from '../components/UserProfile/Block/UploadImgTest'

function UserProfile() {
  const [Info, setInfo] = useState({})
  const [IsUploadImg, setIsUploadImg] = useState(false)
  const router = useRouter()
  const [menuRef, setMenuRef] = useState(React.useRef(null));
  const [fileImgUser, setfileImgUser] = useState(null)

  const ChangeUserInfo = async event => {
    console.log("An")
    let emailRe= null
    let dateOfBirthRe= null
    let genderRe= null
    let urlAvatarRe= null
    let nameRe = null
    
    // console.log(event.target.email.value)
    if(event.target.name.value==""){
      nameRe = Info.name
    }else{
      nameRe = event.target.name.value
    }
    if(event.target.email.value==""){
      emailRe = Info.email
    }else{
      emailRe = event.target.email.value
    }
    if(event.target.dateOfBirth.value==""){
      dateOfBirthRe = Info.dateOfBirth
    }else{
      dateOfBirthRe = event.target.dateOfBirth.value
    }
    if(event.target.gender.value==""){
      genderRe = Info.gender
    }else{
      genderRe = event.target.gender.value
    }
    if(fileImgUser==""){
      urlAvatarRe = Info.urlAvatar
    }else{
      urlAvatarRe =fileImgUser

    }
    console.log(nameRe)
    const res = await fetch('http://127.0.0.1:8000/api/auth/editUser', {
      body: JSON.stringify({
        id: Info.id,
        name: nameRe,
        email: emailRe,
        dateOfBirth: dateOfBirthRe,
        gender: genderRe,
        urlAvatar: urlAvatarRe
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    const result = await res.json()
    console.log(result)
    router.push('/')
  }

  const Logout = (): any => {
    cookie.remove('token')
    cookie.remove('username')
    router.push('/')
  }
  async function getData() {
    const res = await fetch('http://movies202-env.eba-jyaxusy4.us-east-2.elasticbeanstalk.com/api/auth/profile?token=' + cookie.get('token'))
    const result = await res.json()
    setInfo(result)
  }
  useEffect(() => {
    getData();
  }, []);

  function handleClick(event: any): void {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsUploadImg(false);
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
  }, []);

  let isVip = true;
  return (
    <Layout showFooter={true}>
      {IsUploadImg == true && (
        <div className={"overlay openform"}>
          <div className="login-wrapper" id="login-content" ref={menuRef}>
            <UploadImg setIsUploadImg={setIsUploadImg} setfileImgUser={setfileImgUser} />
          </div>
        </div>
      )}
      <div className="hero user-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-ct">
                <h1 style={{ marginLeft: '25.5%', textAlign: 'left' }}>{Info.name}</h1>
                <ul className="breadcumb">
                  <li className="active"><Link href="/">Trang ch???</Link></li>
                  <li> <span className="ion-ios-arrow-right"></span>T??i kho???n</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buster-light">
        <div className="page-single">
          <div className="container">
            <div className="row ipad-width">
              <div className="col-md-3 col-sm-12 col-xs-12">
                <div className="user-information">
                  <div className="user-img">
                    {fileImgUser != null && (<img src={fileImgUser} alt="" />
                    )}
                    {fileImgUser == null && (
                      <img src={Info.urlAvatar} alt=""
                      />
                    )}<br></br>
                    <span className="redbtn" onClick={() => setIsUploadImg(true)}>Thay ?????i</span>
                    <a style={{ display: isVip ? "block" : "none" }} href="#">
                      <img className="vipstatus" src="images/uploads/vip.png" alt="" />
                      <br></br>
                      <p> HI???U L???C ?????N 23/4/2022 </p>
                    </a>
                  </div>
                  <div className="user-fav">
                    <p>Chi ti???t t??i kho???n</p>
                    <ul>
                      <li className="active"><Link href="userprofile">T??i kho???n</Link></li>
                      <li><Link href="watchedmovies">Phim ???? xem</Link></li>
                      <li><Link href="ratedmovies">Phim ???? ????nh gi??</Link></li>
                    </ul>
                  </div>
                  <div className="user-fav">
                    <p>Kh??c</p>
                    <ul>
                      <li><Link href="watchlater">Xem sau</Link></li>
                      <li><Link href="coupon">Nh???p m?? gi???m gi??</Link></li>
                      <li><Link href="coupon">Gia h???n VIP</Link></li>
                      <li onClick={() => Logout()}><Link href="/">????ng xu???t</Link></li>
                    </ul>
                  </div>
                </div>
              </div>


              <div className="col-md-9 col-sm-12 col-xs-12">
                <div className="form-style-1 user-pro" >
                  <form onSubmit={ChangeUserInfo}>
                    <h4>01. Chi ti???t t??i kho???n</h4>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>T??n hi???n th???</label>
                        <input type="text" id="name" name="name" placeholder={Info.name}   />
                        {/* {IsReadOnly
                        ?(<input type="text" value={Info.name} />):(<input type="text" value={Info.name} readOnly/>)}
                         */}
                      </div>
                      <div className="col-md-6 form-it">
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder={Info.email} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Gi???i t??nh</label>
                        <select id="gender" name="gender">
                          {Info.gender=='Male'?(<option value="Male" selected>Male</option>)
                          :(<option value="Male">Male</option>)}
                          {Info.gender=='Female'?(<option value="Female" selected>Female</option>)
                          :(<option value="Female">Female</option>)}
                          {Info.gender=='Non-binary'?(<option value="Non-binary" selected>Non-binary</option>)
                          :(<option value="Male">Non-binary</option>)}
                        </select>
                      </div>
                      <div className="col-md-6 form-it">
                        <label>Tu???i</label>
                        <input type="text" id="dateOfBirth" name="dateOfBirth" placeholder={Info.dateOfBirth} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <input className="submit" type="submit" value="Thay ?????i" />
                      </div>
                    </div>
                  </form>
                  <form action="#" className="password">
                    <h4>02. ?????i m???t kh???u</h4>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>M???t kh???u c??</label>
                        <input type="password" placeholder="**********" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>M???t kh???u m???i</label>
                        <input type="password" placeholder="***************" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 form-it">
                        <label>Nh???p l???i m???t kh???u m???i</label>
                        <input type="password" placeholder="*************** " />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <input className="submit" type="submit" value="Thay ?????i" />
                      </div>
                    </div>
                  </form>
                  <div style={{ display: isVip ? "block" : "none" }} className="payment">
                    <h4>03. Thanh to??n</h4>
                    <p> Mu???n tr??? th??nh VIP? </p>
                    <Link href="payment">
                      <button> THANH TO??N </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserProfile