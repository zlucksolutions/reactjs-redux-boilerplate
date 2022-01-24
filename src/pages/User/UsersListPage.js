import React, { useEffect } from "react";
import Select from "react-select";
import "../../css/ProjectForm.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../../store/slice/userSlice";
import Loader from "../../component/Common/Loader";
import { useNavigate } from "react-router-dom";
import { routes } from "../../constants";
import UserItem from "../../component/Users/UserItem";
import { searchIcon } from "../../icons";
import { useForm } from "../../hooks/useForm";
import Input from "../../component/Common/Input";
import Button from "../../component/Common/Button";

const userTypeOptions = [
  { value: "Customer", label: "Customer" },
  { value: "Broker", label: "Broker" },
];

const userStatusOptions = [
  { value: "verified", label: "verified" },
  { value: "unverified", label: "unverified" },
];

const UsersListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFValues = {
    mobileNum: "",
    userStatus: "",
    userType: "",
  };

  const { values, setValues, handleInputChange } = useForm(
    initialFValues,
    true
  );

  const userList = useSelector((state) => state.user.users);
  const loader = useSelector((state) => state.user.loader);

  const mobileUserHandler = (e) => {
    setValues({ ...values, mobileNum: e.target.value });
    dispatch(
      getUserList({
        userType: values.userType.value,
        mobileNum: e.target.value,
        userStatus: values.userStatus.value,
      })
    );
  };

  useEffect(() => {
    dispatch(
      getUserList({
        userType: values.userType.value,
        mobileNum: values.mobileNum,
        userStatus: values.userStatus.value,
      })
    );
  }, [dispatch, values.userType, values.userStatus, values.mobileNum]);

  const onClickHandle = (id) => {
    navigate(`${routes.users}/${id}`);
  };

  return (
    <>
      {loader && <Loader />}
      <div className="project_edit_main_content">
        <div className="user_data_search_select_box_row">
          <div className="user_data_search">
            <Input
              inputClassName="user_data_search_input"
              type="tel"
              placeholder="Search by Mobile-number"
              id="mobileNum"
              name="mobileNum"
              maxLength={10}
              value={values.mobileNum}
              onChange={mobileUserHandler}
            />
            <Button buttonClassName="user_data_search_btn" text={searchIcon} />
          </div>
          <div className="user_data_search">
            <Select
              value={values.userType}
              onChange={(e) => handleInputChange(e, "userType")}
              className="basic-multi-select"
              classNamePrefix="select"
              name="userType"
              options={userTypeOptions}
            />
          </div>
          <div className="user_data_select">
            <Select
              value={values.status}
              onChange={(e) => handleInputChange(e, "userStatus")}
              className="basic-multi-select"
              classNamePrefix="select"
              name="userStatus"
              options={userStatusOptions}
            />
          </div>
        </div>
        <div className="custom_data_table_content">
          <table className="custom_data_table">
            <thead className="custom_data_table_head">
              <tr>
                <th className="custom_data_table_heading">First Name</th>
                <th className="custom_data_table_heading">Last Name</th>
                <th className="custom_data_table_heading">Phone Number</th>
                <th className="custom_data_table_heading">Address</th>
                <th className="custom_data_table_heading">Created At</th>
                <th className="custom_data_table_heading"></th>
              </tr>
            </thead>
            <tbody className="custom_data_table_body">
              {userList &&
                userList.map((item, i) => {
                  return (
                    <UserItem
                      key={i}
                      item={item}
                      i={i}
                      onClickHandle={onClickHandle}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UsersListPage;
