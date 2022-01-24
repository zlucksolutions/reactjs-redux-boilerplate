import React from "react";
import { useDispatch } from "react-redux";
import { sendOtp } from "../../store/slice/userSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "../../css/LoginPage.css";
import { useNavigate } from "react-router";
import { routes } from "../../constants";
import { useForm } from "../../hooks/useForm";
import { loginLogo } from "../../icons";
import Input from "../../component/Common/Input";
import Button from "../../component/Common/Button";

toast.configure();
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFValues = {
    phoneNumber: "",
  };
  const validate = (fieldValues = values) => {
    var temp = { ...errors };

    if ("phone_number" in fieldValues) {
      if (!fieldValues.phoneNumber) {
        temp.phoneNumber = "Phone number is required !";
      } else {
        temp.phoneNumber =
          fieldValues.phoneNumber.length === 10
            ? ""
            : "Phone number is not valid !";
      }
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const { errors, setErrors, values, handleInputChange } = useForm(
    initialFValues,
    true,
    validate
  );

  const sendOtpHandler = (e) => {
    e.preventDefault();
    if (!values.phoneNumber) {
      setErrors("Phone Number Require !");
    } else {
      dispatch(sendOtp({ phone_number: values.phoneNumber }));
      localStorage.setItem("phone_number", values.phoneNumber);
      navigate(routes.verifyOtp);
    }
  };

  return (
    <section className="login_section">
      <div className="login_content">
        <div className="login_top_content">
          <h3>Welcome Back !</h3>
          <p>Sign in to continue to Zluck</p>
        </div>
        <div className="login_input_logo_content">
          <div className="login_logo">{loginLogo}</div>
          <div className="login_input_content">
            <Input
              className="login_input_row null"
              errorClassName="err_text"
              type="tel"
              placeholder="Enter Phone Number"
              label="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleInputChange}
              error={errors?.phoneNumber || ""}
              maxLength={10}
            />

            <Button
              buttonClassName="login_btn"
              onClick={sendOtpHandler}
              text=" Send OTP"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
