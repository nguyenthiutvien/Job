import { Login } from './Pages/LoginUser'
import { Route, Routes } from "react-router-dom"
import { LoginEmployee } from './Pages/LoginEmployee'
import { Register } from './Pages/RegisterUser'
import { FogotPassword } from './Pages/FogotPassword'
import { ConfirmCode } from './Pages/ConfirmCode'
import { RegisterEmployee } from './Pages/RegisterEmployee'
import { ChangePassword } from './Pages/ChangePassword'
import { EmployeePayment } from './Pages/EmployeePayment'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/employee' element={<LoginEmployee />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/registeremployee' element={<RegisterEmployee />}></Route>
        <Route path='/confirmEmail' element={<FogotPassword />}></Route>
        <Route path='/yourcode' element={<ConfirmCode />}></Route>
        <Route path='/resetpass' element={<ChangePassword />}></Route>
        <Route path='/payment' element={<EmployeePayment />}></Route>
      </Routes>

    </>
  )
}

export default App