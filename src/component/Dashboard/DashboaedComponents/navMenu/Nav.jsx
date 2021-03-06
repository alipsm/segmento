import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { changeRegisterCompleteCheck, findUserAction } from '../../../Redux/Action'
import getCookie from '../../../Utils/findUser'

export default function Nav({path}) {


  // const dispatch=useDispatch();
  // useEffect(() => {
  //     dispatch(findUserAction())
  // }, [])
  
  // let user=get
  const { checkRegisterComplete } = useSelector(state => state.userState)

  const navigate=useNavigate();

  const dispatch=useDispatch();
  const userToken= localStorage.getItem("token")
  //REGISTER COMPLETE => NAVIGATE TO VERIFY FORM
  // debugger
  // // console.log(window.location.href.includes("ValidateEmail"));
  if (checkRegisterComplete == true) {
    navigate("/ValidateEmail")
    dispatch(changeRegisterCompleteCheck(false));
  }
  // useEffect(() => {
  // //   // debugger
  // if (checkRegisterComplete == true) {
  //     navigate("/ValidateEmail")
  //   }
  // }, [checkRegisterComplete])

  // debugger
  useEffect(() => {
    if (userToken) {
      navigate("/dashboard/easyStart",{replace:true})
    }
  }, [userToken])
  
  
  // console.log(window.location.pathname)
  return (
    <div id='nav-option-head' className='w-full flex items-center justify-between px-28'>
      <div className='flex justify-around items-center'>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav option_segmento_logo' />
          <a href='#'>امکانات</a>
        </div>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav course_video_logo' />
          <a href='#'>ویدئو آموزشی</a>
        </div>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav diamond_price_logo' />
          <a href='#'>قیمت گذاری</a>
        </div>
        <di className="flex justify-center items-center pl-5"v>
          <span className='logo_nav cookie_communicate_logo' />
          <a href='#'>همکاری با آژانس ها</a>
        </di>
      </div>
      <div>

        {/* <Routes>
          <Route path={"login"} element={<Link to={"/"} className='btn-style'>ثبت نام</Link>} />
          <Route path={"forgotpassword"} element={<Link to={"/"} className='btn-style'>ثبت نام</Link>} />
          <Route exact path={"*"} element={<Link to={"/login"} className='btn-style'>ورود</Link>} />
        </Routes> */}

          {/* <Link to={"/"} className='btn-style'>ثبت نام</Link> */}
          {/* <Link to={"/"} className='btn-style'>ثبت نام</Link> */}
          <Link to={`/${path}`} className='btn-style'>{path==""?"ورود":"ثبت نام"}</Link>

      </div>
    </div>
  )
}
