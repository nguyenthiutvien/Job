import { Link, useNavigate } from "react-router-dom"
import "../SCSS/register.css"
import React, { useState } from "react"
import axios from "axios"

export const RegisterEmployee = () => {
    const navigate = useNavigate()
    const [error, setError] = useState({})

    const [pass, setPass] = useState({
        confirmPass: ""
    })
    const [employee, setEmployee] = useState({
        company_name: "",
        logo: "",
        email: "",
        password: "",
        address: "",
        number_phone: ""

    })

    const handelInput = (e) => {
        const ifnforEmployee = { ...employee, [e.target.name]: e.target.value }
        setEmployee(ifnforEmployee)
    }

    
    const handelSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        let status = 1;
        if (employee.company_name === "") {
            errors.company_name = 'Tên công ty của bạn'
            status = 0
        }
        if (employee.email === "") {
            errors.email = 'Email không hợp lệ'
            status = 0
        }
        if (employee.number_phone.length < 10) {
            errors.number_phone = 'Số điện thoại không hợp lệ'
            status = 0
        }
        if (employee.address === "") {
            errors.address = 'Địa chỉ không được để trống'
            status = 0
        }
        if (employee.password.length < 8) {
            errors.password = 'Mật khẩu quá ngắn'
            status = 0
        }
        if (pass.confirmPass != employee.password) {
            errors.confirmPass = 'Xác thực không chính xác'
            status = 0
        }
        setError(errors)
        if (status == 1) {
            const storeEmployee = {
                company_name: employee.company_name,
                logo: employee.logo,
                email: employee.email,
                password: employee.password,
                address: employee.address,
                number_phone: employee.number_phone
            }

            localStorage.setItem("employee",JSON.stringify(storeEmployee))
            // addNewCompany();
            navigate("/payment")

        }
    }
    return (
        <div className='container--register'>
            <div className="register--title">
                <h3>Tạo tài nhà tuyển dụng của bạn</h3>
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
                            name='company_name'
                            className='form--name'
                            placeholder='Nhập tên công ty'
                            onChange={handelInput}
                        />
                        <br />
                        <b style={{ color: "red" }}>{error.company_name}</b>


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
                <button type="submit" className="register">Đăng ký</button>
            </form>
            <div className="login">
                <h4>Bạn đã có tài khoản <Link className="link--to" to={"/employee"}>Đăng nhập</Link></h4>
            </div>
        </div>
    )
}
