import { Link, useNavigate } from "react-router-dom"
import "../SCSS/register.css"
import React, { useState } from "react"
import { postUser } from "../api/Api"
export const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [user, setUser] = useState({
        username: "",
        avatar: "",
        email: "",
        password: "",
        number_phone: "",
        address: ""
    })
    const [pass, setPass] = useState({
        confirmPass: ""
    })
    const handelInput = (e) => {
        const ifnforUser = { ...user, [e.target.name]: e.target.value }
        setUser(ifnforUser)
    }



    const addNewUser = async () => {
        postUser(user);
        // navigate("/")
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let status = 1;
        if (user.username === "") {
            errors.username = 'Tên không được rỗng'
            status = 0
        }
        if (user.email === "") {
            errors.email = 'Email không hợp lệ'
            status = 0
        }
        if (user.number_phone.length < 10) {
            errors.number_phone = 'Số điện thoại không hợp lệ'
            status = 0
        }
        if (user.address === "") {
            errors.address = 'Địa chỉ không được để trống'
            status = 0
        }
        if (user.password.length < 8) {
            errors.password = 'Mật khẩu quá ngắn'
            status = 0
        }
        if (pass.confirmPass != user.password) {
            errors.confirmPass = 'Xác thực không chính xác'
            status = 0
        }
        setError(errors)

        if (status == 1) {
            addNewUser();
            navigate("/")
           
        }
    }
    return (
        <div className="container--body">
            <div className='container--register'>
                <div className="register--title">
                    <h3>Tạo tài khoản của bạn</h3>
                </div>
                <div className="register--button">
                    <button type="submit">ĐĂNG KÝ BẰNG FACEBOOK</button> <br /><br />
                    <button type="submit">ĐĂNG KÝ BẰNG LINKEDIN</button>
                </div>
                <div className="or--option">
                    --- Hoặc ---
                </div>
                <form onSubmit={handelSubmit} action="" method="post">
                    <div className="form--register">
                        <div className="left--for">

                            <input type="text"
                                name='username'
                                className='form--name'
                                placeholder='Nhập họ tên của bạn'
                                onChange={handelInput}
                            />
                            <br />
                            <b style={{ color: "red" }}>{error.username}</b>


                            <br /><br />
                            <input type="email"
                                name='email' className='form--name' placeholder='Nhập Email của bạn'
                                onChange={handelInput}
                            />
                            <br />
                            <b style={{ color: "red" }}>{error.email}</b>
                            <br /><br />
                            <input type="number"
                                name='number_phone' className='form--name' placeholder='Nhập số điện thoại của bạn'
                                onChange={handelInput}
                            />
                            <br />
                            <b style={{ color: "red" }}>{error.number_phone}</b>
                        </div>
                        <div className="right--form">
                            <input type="text"
                                name='address' className='form--name' placeholder='Nhập địa chỉ của bạn'
                                onChange={handelInput}
                            />
                            <br />
                            <b style={{ color: "red" }}>{error.address}</b>
                            <br /><br />
                            <input type="password"
                                name='password' className='form--name' placeholder='Nhập mật khẩu của bạn'
                                onChange={handelInput}
                            />
                            <br />
                            <b style={{ color: "red" }}>{error.password}</b>
                            <br /><br />
                            <input type="password"
                                name='confirm--password' className='form--name' placeholder='Nhập xác thực mật khẩu'
                                onChange={(e) => setPass({ confirmPass: e.target.value })}
                            />
                            <br />
                            <b style={{ color: "red" }}>{error.confirmPass}</b>
                        </div>
                    </div>
                    <button type="submit" className="register"><b>Đăng ký</b> </button>
                </form>
                <div className="login">
                    <h4>Bạn đã có tài khoản <Link className="link--to" to={"/"}>Đăng nhập</Link></h4>
                </div>
            </div>
        </div>
    )
}
