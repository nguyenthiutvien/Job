import React, { useState } from 'react'
import "../SCSS/resetpassword.css"
import { useNavigate,Link } from 'react-router-dom'
import { resetPassword } from '../api/Api'
export const ChangePassword = () => {
    const navigate=useNavigate()
    const [password,setPassword]=useState({
        password:""
    })
    const [pass2,setPass2]=useState({
        pass2:""
    })

    const email=JSON.parse(localStorage.getItem("user"));

    const [error,setError]=useState({})
    const handelSubmit=(e)=>{
        e.preventDefault()
        let error={}
        let status=1
        if(password.password==""){
            error.pass1="Bạn chưa nhập mật khẩu"
            status=0
        }else if(password.password.length<8){
            error.pass1="Mật khẩu quá ngắn"
            status=0
        }

        if(pass2.pass2==""){
            error.pass2="Bạn chưa nhập mật khẩu"
            status=0
        }else if(password.password!=pass2.pass2){
            error.pass2="Xác thực mật khẩu sai"
            status=0
        }
        if (status==1) {
            resetPassword(email,{password:password})
            // navigate("/")
        }
        setError(error)
        console.log(email)
    }
  return (
    <div className="container--form">
      <form onSubmit={handelSubmit} action="" method="post">
        <div className="title--form">
          <h3>Lấy lại mật khẩu</h3>
        </div>
        <div className="value--button">
          <input type="password"
            name='password'
            className='data--button'
            placeholder='Nhập email của bạn'
            onChange={(e)=>setPassword({password:e.target.value})}
          />
          <br />
          <b style={{ color: "red" }} >{error.pass1}</b>
          <br />
        </div>
        <div className="value--button">
          <input type="password"
            name='confirm_pass'
            className='data--button'
            placeholder='Xác thực mật khẩu'
            onChange={(e)=>setPass2({pass2:e.target.value})}
          />
          <br />
          <b style={{ color: "red" }} >{error.pass2}</b>
          <br /><br /> <br />
        </div>
        <button className='data--button confirm' type="submit">Xác thực</button>
      </form>
      <div className="link--back">
        <h3>Tôi muốn <Link className="color" to={"/"}>quay về</Link></h3>
      </div>

    </div>
  )
}
