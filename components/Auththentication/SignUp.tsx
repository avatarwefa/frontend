import React from 'react'

interface Props {
}
const SignUp: React.FunctionComponent<Props> = () => {
  return (
    <div className="login-content">
        <a href="#" className="close">x</a>
        <h3>sign up</h3>
        <form method="post" action="#">
            <div className="row">
                 <label htmlFor="username-2">
                    Username:
                    <input type="text" name="username" id="username-2" placeholder="Hugh Jackman" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{8,20}$" required />
                </label>
            </div>
           
            <div className="row">
                <label htmlFor="email-2">
                    your email:
                    <input type="password" name="email" id="email-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
                </label>
            </div>
             <div className="row">
                <label htmlFor="password-2">
                    Password:
                    <input type="password" name="password" id="password-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
                </label>
            </div>
             <div className="row">
                <label htmlFor="repassword-2">
                    re-type Password:
                    <input type="password" name="password" id="repassword-2" placeholder="" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" required />
                </label>
            </div>
           <div className="row">
             <button type="submit">sign up</button>
           </div>
        </form>
    </div>    
  )
}
export default SignUp