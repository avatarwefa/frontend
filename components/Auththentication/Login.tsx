import React, { useEffect, useState } from 'react'
import cookie from "js-cookie"
import Link from 'next/link';

interface Props {
  setLoginModal: Function
}
const Login: React.FunctionComponent<Props> = ({ setLoginModal }: Props) => {
  const LoginUser = async event => {
    event.preventDefault()
    const res = await fetch('http://movies202-env.eba-jyaxusy4.us-east-2.elasticbeanstalk.com/api/auth/login', {
      body: JSON.stringify({
        email: event.target.email.value,
        password: event.target.password.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
    const result = await res.json()
    if (result.token == undefined) {
      window.alert("Sai email hoặc mật khẩu, vui lòng nhập lại.")
    }
    else {
      cookie.set('token', result.token, { expires: 1 })
      const name = await fetch('http://movies202-env.eba-jyaxusy4.us-east-2.elasticbeanstalk.com/api/auth/profile?token=' + cookie.get('token'))
      const nameResult = await name.json()
      cookie.set('name', nameResult.name, { expires: 1 })
      setLoginModal(false)
    }
  }

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }

  return (
    <div className="login-content">
      <a href="#" className="close">x</a>
      <h3>Login</h3>
      <form onSubmit={LoginUser}>
        <div className="row">
          <label htmlFor="username">
            Email:
                    <input type="email" name="email" id="email" placeholder="user@gmail.com" required />
          </label>
        </div>

        <div className="row">
          <label htmlFor="password">
            Password:
                    <input type="password" name="password" id="password" required />
          </label>
        </div>
        <div className="row">
          <div className="remember">
            <div>
              <input type="checkbox" name="remember" value="Remember me" /><span>Remember me</span>
            </div>
            <a href="#">Forget password ?</a>
          </div>
        </div>
        <div className="row">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="row">
        <p>Or via social</p>
        <div className="social-btn-2">
          <Link href="#">
            <a className="fb" ><i className="ion-social-facebook"></i>Facebook</a>
          </Link>
          <Link href="#">
            <a className="tw" ><i className="ion-social-twitter"></i>twitter</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login