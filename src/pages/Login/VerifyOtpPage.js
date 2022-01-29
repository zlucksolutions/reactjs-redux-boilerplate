import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import OtpInput from "react-otp-input";
import { verifyOtp } from "../../store/slice/userSlice";
import { loginLogo } from "../../icons";
import Button from "../../component/Common/Button";

const VerifyOtpPage = ({ phoneNumber }) => {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const otpChangeHandler = (value) => {
    if (new RegExp(/^[0-9]*$/).test(value)) setOtp(value);
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    if (!otp) {
      setOtpError("Enter Valid OTP");
    } else {
      dispatch(
        verifyOtp({
          phone_number: localStorage.getItem("phone_number"),
          otp: +otp,
        })
      );
      navigate("/");
    }
  };
  return (
    <section className="login_section">
      <div className="login_content">
        <div className="login_top_content">
          <h3>Welcome Back !</h3>
          <p>Sign in to continue to Sangini</p>
        </div>
        <div className="login_input_logo_content">
          <div className="login_logo">{loginLogo}</div>
          <div className="login_input_content">
            <div className="login_input_row">
              <label>Verify OTP</label>
              <div className="login_otp_input">
                <OtpInput
                  value={otp}
                  onChange={(value) => otpChangeHandler(value)}
                  numInputs={4}
                />
              </div>
              {!otp && otpError ? (
                <span className="error">{otpError}</span>
              ) : null}
            </div>
            <Button
              buttonClassName="login_btn"
              onClick={sumbitHandler}
              text="Submit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyOtpPage;
