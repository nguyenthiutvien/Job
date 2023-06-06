import { useEffect, useState } from "react"
import "../SCSS/forgot.css"
import { Link, useNavigate } from "react-router-dom"
import { recoverPassword, confirmEmail, getCode } from "../api/Api"
export const FogotPassword = () => {
  const navigate = useNavigate()
  const [checkUser, setCheckUser] = useState({
    email: ""
  })

  const [email, setEmail] = useState({
    email: ""
  })
  const [error, setError] = useState({})

  const isvaliEmail=(email)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  useEffect(() => {
    if (email.email!=="" && isvaliEmail(email.email)) {
      const CheckUser = async () => {
        const user = await confirmEmail(email.email)
        if (user) {
          setCheckUser(user.data)
        }
        return null
      }
      CheckUser()
    }
    
  }, [email.email])


  useEffect(()=>{
    if(email.email!="" && isvaliEmail(email.email)){
      storeCode()
    }
  },[email.email])

  const storeCode=async ()=>{
    const codes=await getCode(email.email)
    if(codes){
      // localStorage.removeItem("code");
      localStorage.setItem("code",JSON.stringify(codes.data))
    } 
}

  const Verification = async () => {
    recoverPassword(email.email)
  }
  const handelSubmit = (e) => {
    e.preventDefault()
    let error = {}
    let status = 1
    if (email.email == "") {
      error.email = "Email không hợp lệ"
      status = 0
    }
    if (email.email != checkUser.email) {
      error.email = "Tài khoản chưa tồn tại"
      status = 0
    }


    if (status==1) {
      Verification()
      navigate("/yourcode")
      localStorage.setItem("user",JSON.stringify(email.email))
    }
    setError(error)
    console.log(checkUser)
    // console.log(code)
  }
  return (
    <div className="container--form">
      <form onSubmit={handelSubmit} action="" method="post">
        <div className="title--form">
          <h3>Xác thực Email</h3>
        </div>
        <div className="value--button">
          <input type="email"
            name='email'
            className='data--button'
            placeholder='Nhập email của bạn'
            onChange={(e) => setEmail({ email: e.target.value })}
          />
          <br />
          <b style={{ color: "red" }} >{error.email}</b>
          <br /><br /> 
          <button className='data--button confirm' type="submit">Xác thực</button>
        </div>
      </form>
      <div className="link--back">
        <h3>Tôi muốn <Link className="color" to={"/"}>quay về</Link></h3>
      </div>

    </div>
  )
}
