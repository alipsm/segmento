import React, { useContext } from "react";
import { TextButton } from "../../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";

export default function AuthButton({
  widthValue,
  style,
  handlerClick,
  reduxHandleClick,
  disabled,
  padding,
  classes,
  textButton,
  setOnclickValue
}) {
  const value = useContext(TextButton);
  const dispatch = useDispatch()
  // debugger
  return (
    <button
      variant="contained"
      className={`btn-style ${classes}`}
      disabled={disabled}

      style={style}
      onClick={handlerClick != undefined && reduxHandleClick != undefined ? (
        (e) => {
          handlerClick()
          dispatch(reduxHandleClick(setOnclickValue!=""?setOnclickValue:null))
        }
      ) : handlerClick != undefined ? (
        (e) => {
          handlerClick(setOnclickValue!=""?setOnclickValue:null)
        }
      ) : (
        (e) => {
          dispatch(reduxHandleClick())
        }
      )}
    >
      {value != undefined ? value : textButton}
    </button>
  );
}
