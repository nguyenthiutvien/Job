import { useEffect, useState } from "react"
import "../SCSS/login.css"
import { Link, useNavigate } from "react-router-dom"
import { getCompany } from "../api/Api"
export const LoginEmployee = () => {

    const navigate = useNavigate()
    const [error, setError] = useState({})
    const [employee, setEmployee] = useState([])
    const [login, setLoin] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        const getData = async () => {
            const employees = await getCompany()
            if (employees) {
                setEmployee(employees.data)
            }
        }
        getData()
    }, [])
    const handelInput = (e) => {
        const values = { ...login, [e.target.name]:e.target.value }
        setLoin(values)
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        let error = {}
        employee.map((item) => {
            if (item.email == login.email && item.password == login.password) {
                navigate("/confirmEmail")
            }
            if (item.email != login.email) {
                error.email = "Email chưa tồn tại"
            }
            else if (item.password != login.password && item.email == login.email) {
                error.password = "Mật khẩu không chính xác"
            }
        })
        setError(error)
        console.log(login)
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
                    <b style={{ color: "red" }} >{error.email}</b>
                    <br /><br /><br />
                    <input type="password"
                        name='password'
                        className='login--password'
                        placeholder='Mật khẩu'
                        onChange={handelInput}
                    />
                    <br />
                    <b style={{ color: "red" }} >{error.password}</b>
                </div>
                <div className="forgot--pass">
                    <Link to={"/confirmEmail"}><h4> Bạn quên mật khẩu ?</h4></Link>
                </div>
                <button type="submit" className='button--login'>Đăng nhập</button>
            </form>

            <div className="another--relevent">
                <p>Bạn chưa có tài khoản ? <Link to={"/registeremployee"}>Nhấn vào đây</Link> để dễ dàng tạo tài khoản</p>

            </div>
        </div>
    )
}
