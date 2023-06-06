import "../SCSS/login.css"
import {Link,useNavigate} from "react-router-dom"
import {getUser} from "../api/Api"
import { useEffect, useState } from "react"
export const Login = () => {
    const navigate=useNavigate()
    const [user,setUser]=useState([])
    const [error,setError]=useState({})
    const [login,setLoin]=useState({
        email:"",
        password:""
    })
    useEffect(()=>{
        const getData=async()=>{
            const datas=await getUser()
            if (datas) {
                setUser(datas.data)
            }
          return null
        }
        getData()
    },[])
    const handelInput=(e)=>{
        const values={...login,[e.target.name]:e.target.value}
        setLoin(values)
    }
    

    const handelSubmit=(e)=>{
        e.preventDefault();
        let error={}
        user.map((item)=>{
            if (item.email==login.email && item.password==login.password) {
                navigate("/confirmEmail")
            }
            if (item.email != login.email) {
                error.email="Tài khoản không tồn tại"
            }else if( item.email==login.email && item.password != login.password){
                error.password="Mật khẩu không chính xác"
            }
           
        })
        setError({...error})
    }




  return (
    <div className='container--login'>
        <form onSubmit={handelSubmit} action="" method="post" className='margin--top'>
            <div className="content--login">
                <h2>Đăng nhập</h2>
            </div>
            <div className="form--login">
                <input type="email" 
                name='email'
                className='login--email'
                placeholder='Địa chỉ Email'
                onChange={handelInput}
                /> 
                <br />
                <b style={{ color:"red" }}>{error.email}</b>
                <br /><br /><br />
                <input type="password" 
                name='password'
                className='login--password'
                placeholder='Mật khẩu'
                onChange={handelInput}
                />
                <br />
                 <b style={{ color:"red" }}>{error.password}</b>
            </div>
            <div className="forgot--pass">
               <Link to={"/confirmEmail"}><h4> Bạn quên mật khẩu ?</h4></Link>
            </div>
            <button type="submit" className='button--login'><h3>Đăng nhập</h3></button>
        </form>

        <div className="another--relevent">
            <p>Bạn chưa có tài khoản ? <Link to={"/register"}>Nhấn vào đây</Link> để dễ dàng tạo tài khoản</p>
            <p>Nếu bạn là nhà tuyển dụng, hãy <Link to={"/employee"}> Nhấn vào đây</Link></p>

        </div>
    </div>
  )
}
