import React, { useState } from 'react'
import "../SCSS/forgot.css"
import { Link, useNavigate } from 'react-router-dom'
export const ConfirmCode = () => {
    const navigate = useNavigate()

    const [code, setCode] = useState({
        code: ""
    })
    const [error, setError] = useState({})
    const handelSubmit = (e) => {
        e.preventDefault()
        let error = {}
        let status = 1
        const servercode = JSON.parse(localStorage.getItem("code"))
        if (code.code == "") {
            error.code = "Bạn chưa nhập mã code"
            status = 0
        } else if (code.code !== servercode) {
            error.code = "Mã code sai"
            status = 0
        }

        if (status === 1) {
            navigate("/resetpass")
        }
        console.log(code)
        console.log(servercode)
        setError(error)
    }
    return (
        <div className="container--form">
            <form onSubmit={handelSubmit} action="" method="post">
                <div className="title--form">
                    <h3>Nhập mã code</h3>
                </div>
                <div className="value--button">
                    <input type="password"
                        name='password'
                        className='data--button'
                        placeholder='Nhập code của bạn'
                        onChange={(e) => setCode({ code: e.target.value })}
                    />
                    <br />
                    <b style={{ color: "red" }}>{error.code}</b>
                    <br /><br /> <br />
                    <button className='data--button confirm' type="submit">Xác thực</button>
                </div>
            </form>
            <div className="link--back">
                <h3>Tôi muốn <Link className="color" to={"/"}>gửi lại</Link></h3>
            </div>

        </div>
    )
}
