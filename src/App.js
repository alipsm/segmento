import React, { Fragment, useEffect } from "react";
import Register from "./pages/register/Register";
import "./App.css";
import Forgotpass from "./pages/forgotPassword/Forgotpass";
import { Routes, Route } from "react-router-dom";
import ValidateEmail from "./pages/validateEmail/ValidateEmail";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login.jsx";
import DashboardBody from "./component/Dashboard/DashboardBody";
// import Nav from "./component/navMenu/Nav";
import Modal from 'react-modal'
import HandleModal from "./component/Utils/handleModal";
import Nav from "./component/Dashboard/DashboaedComponents/navMenu/Nav";
import { useSelector } from "react-redux";
import LandingPage from "./component/Utils/landingPage/landingPage";
import LoadingPage from "./component/Utils/loadingPage/LoadingPage";
// import Nav from "./component/Dashboard/DashboaedComponents/navMenu/Nav";
// import ModalContainer from "./component/Utils/ModalContainer";


export default function App() {

  const { forceUpdate } = useSelector(state => state.userState)
  const { ProcessingDelay } = useSelector(state => state.loadingState)


  console.log(ProcessingDelay.length)
  //HANDLE SELECT NEXT INPUT IN FORM FORGOTPASSWORD AND VERIFYEMAIL
  // useEffect(() => {
  //   handleNextInput(0)
  // }, [codVerifyEmail_1])
  // useEffect(() => {
  //   handleNextInput(4)
  // }, [codVerifyEmail_2])
  // useEffect(() => {
  //   handleNextInput(3)
  // }, [codVerifyEmail_3])
  // useEffect(() => {
  //   handleNextInput(2)
  // }, [codVerifyEmail_4])

  return (
    <Fragment>

      <div className="app">
        <div className="flex flex-col items-center w-full justify-center overflow-hidden">


          <Routes>
            <Route exact path={"/"} element={<Nav path={"register"} />} />
            <Route exact path={"register"} element={<Nav path={""} />} />
            <Route exact path={"forgotPassword"} element={<Nav path={""} />} />
            <Route exact path={"ValidateEmail"} element={<Nav path={""} />} />
            {/* <Route exact path={"/"} element={<Nav path={"login"}/>} />
          <Route exact path={"login"} element={<Nav path={""}/>} />
          <Route exact path={"forgotPassword"} element={<Nav path={"login"}/>} />
          <Route exact path={"ValidateEmail"} element={<Nav path={"login"}/>} /> */}
          </Routes>

          {/* <button className="btn-style" onClick={()=>LoadingPage({show:true})}>click me!</button> */}
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotPassword" element={<Forgotpass />} />
            <Route path="ValidateEmail" element={<ValidateEmail />} />
          </Routes>


        </div>
        <Routes>
          <Route path="dashboard/payment*" element={<LandingPage />} />
          <Route path="dashboard/*" element={<DashboardBody />} />
        </Routes>

        {/* <HandleModal /> */}
        {/* {ProcessingDelay.length>0?alert(''):null} */}
        <LoadingPage/>
        {/* {<LoadingPage/>} */}
        <ToastContainer rtl />
        {forceUpdate ? "" : ""}
      </div>
      {/* <LoadingPage /> */}
    </Fragment>

  );
}
