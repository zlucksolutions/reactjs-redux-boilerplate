import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../store/slice/userSlice";
import moment from "moment";
import { routes } from "../../constants";

const UserDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  const getUserData = useSelector((state) => state.user.userById);

  const verifyUserHandler = () => {
    setIsClicked(true);
  };

  return (
    <>
      <div className="comman_btn_container center_back_btn">
        <Link to={routes.users} className="comman_btn back_btn">
          Back
        </Link>
      </div>
      <div className="project_edit_main_content">
        <div className="about_page_section">
          <div className="about_detaile_row">
            <div className="about_detaile_text_content">
              <h2>Name </h2>
              <p>
                {getUserData?.first_name} {getUserData?.last_name}
              </p>
            </div>
            <div className="about_detaile_text_content">
              <h2>Mobile Number </h2>
              <p>{getUserData?.phone_number}</p>
            </div>
            <div className="about_detaile_text_content">
              <h2>Email </h2>
              <p>{getUserData?.email}</p>
            </div>
            <div className="about_detaile_text_content">
              <h2>User Type </h2>
              <p>{getUserData?.user_type}</p>
            </div>
            <div className="about_detaile_text_content">
              <h2>Address </h2>
              <p>{getUserData?.address}</p>
            </div>
            <div className="about_detaile_text_content">
              <h2>Created At </h2>
              <p>
                {moment(getUserData?.created_at).format("DD/MM/YY, h:mm A")}
              </p>
            </div>
            {getUserData?.updated_at && (
              <div className="about_detaile_text_content">
                <h2>Updated At </h2>
                <p>
                  {moment(getUserData?.updated_at).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
