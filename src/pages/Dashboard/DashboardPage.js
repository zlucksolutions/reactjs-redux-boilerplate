import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDashboardDetail } from "../../store/slice/dashboardSlice";

const DashboardPage = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const dashboard = useSelector((state) => state.dashboard.dashboard);
  console.log("dashboard", dashboard);

  useEffect(() => {
    console.log("dash");
    if (!dashboard) {
      dispatch(getDashboardDetail());
    } else {
      setIsLoading(false);
    }
  }, [dispatch, dashboard]);

  if (isLoading) {
    return <div />;
  }

  return (
    <>
      <div className="dashboard_body">
        <div className="dashboard_top_column_row">
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="dashboard_top_column">
              <div className="dashboard_top_column_main_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35.012"
                  height="18.235"
                  viewBox="0 0 35.012 18.235"
                >
                  <g id="user" transform="translate(-8 -12.583)">
                    <g
                      id="Group_1111"
                      dataname="Group 1111"
                      transform="translate(8 14.773)"
                    >
                      <circle
                        id="Ellipse_46"
                        dataname="Ellipse 46"
                        cx="2.917"
                        cy="2.917"
                        r="2.917"
                        transform="translate(2.919)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></circle>
                      <path
                        id="Path_1020"
                        dataname="Path 1020"
                        d="M17.731,17.5A6.115,6.115,0,0,0,15.3,22.386v.365h-6.2A1.1,1.1,0,0,1,8,21.657v-.729a4.009,4.009,0,0,1,4.011-4.011h3.648A4,4,0,0,1,17.731,17.5Z"
                        transform="translate(-8 -9.623)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></path>
                      <circle
                        id="Ellipse_47"
                        dataname="Ellipse 47"
                        cx="2.917"
                        cy="2.917"
                        r="2.917"
                        transform="translate(26.259)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></circle>
                      <path
                        id="Path_1021"
                        dataname="Path 1021"
                        d="M29.283,20.929v.729a1.1,1.1,0,0,1-1.094,1.094h-6.2v-.365A6.112,6.112,0,0,0,19.554,17.5a3.978,3.978,0,0,1,2.072-.584h3.648A4.012,4.012,0,0,1,29.283,20.929Z"
                        transform="translate(5.729 -9.625)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></path>
                    </g>
                    <circle
                      id="Ellipse_48"
                      dataname="Ellipse 48"
                      cx="4"
                      cy="4"
                      r="4"
                      transform="translate(21 12.583)"
                      fill="#c11f3b"
                    ></circle>
                    <path
                      id="Path_1022"
                      dataname="Path 1022"
                      d="M24.369,17.583H16.344a4.015,4.015,0,0,0-4.011,4.011v2.188a1.1,1.1,0,0,0,1.094,1.094H27.286a1.1,1.1,0,0,0,1.094-1.094V21.594A4.015,4.015,0,0,0,24.369,17.583Z"
                      transform="translate(5.149 5.941)"
                      fill="#c11f3b"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="dashboard_top_column_left_content">
                <h2 className="dashboard_top_column_left_count_text">
                  {dashboard.total_customer_count}
                </h2>
                <p className="dashboard_top_column_left_peragraph_text">
                  Customers
                </p>
                {/* <p className="dashboard_top_column_left_bottom_text">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                  25%
                </span>
                Since last week
              </p> */}
              </div>
            </div>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <div className="dashboard_top_column">
              <div className="dashboard_top_column_main_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35.012"
                  height="18.235"
                  viewBox="0 0 35.012 18.235"
                >
                  <g id="user" transform="translate(-8 -12.583)">
                    <g
                      id="Group_1111"
                      dataname="Group 1111"
                      transform="translate(8 14.773)"
                    >
                      <circle
                        id="Ellipse_46"
                        dataname="Ellipse 46"
                        cx="2.917"
                        cy="2.917"
                        r="2.917"
                        transform="translate(2.919)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></circle>
                      <path
                        id="Path_1020"
                        dataname="Path 1020"
                        d="M17.731,17.5A6.115,6.115,0,0,0,15.3,22.386v.365h-6.2A1.1,1.1,0,0,1,8,21.657v-.729a4.009,4.009,0,0,1,4.011-4.011h3.648A4,4,0,0,1,17.731,17.5Z"
                        transform="translate(-8 -9.623)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></path>
                      <circle
                        id="Ellipse_47"
                        dataname="Ellipse 47"
                        cx="2.917"
                        cy="2.917"
                        r="2.917"
                        transform="translate(26.259)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></circle>
                      <path
                        id="Path_1021"
                        dataname="Path 1021"
                        d="M29.283,20.929v.729a1.1,1.1,0,0,1-1.094,1.094h-6.2v-.365A6.112,6.112,0,0,0,19.554,17.5a3.978,3.978,0,0,1,2.072-.584h3.648A4.012,4.012,0,0,1,29.283,20.929Z"
                        transform="translate(5.729 -9.625)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></path>
                    </g>
                    <circle
                      id="Ellipse_48"
                      dataname="Ellipse 48"
                      cx="4"
                      cy="4"
                      r="4"
                      transform="translate(21 12.583)"
                      fill="#c11f3b"
                    ></circle>
                    <path
                      id="Path_1022"
                      dataname="Path 1022"
                      d="M24.369,17.583H16.344a4.015,4.015,0,0,0-4.011,4.011v2.188a1.1,1.1,0,0,0,1.094,1.094H27.286a1.1,1.1,0,0,0,1.094-1.094V21.594A4.015,4.015,0,0,0,24.369,17.583Z"
                      transform="translate(5.149 5.941)"
                      fill="#c11f3b"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="dashboard_top_column_left_content">
                <h2 className="dashboard_top_column_left_count_text">
                  {dashboard.total_broker_count}
                </h2>
                <p className="dashboard_top_column_left_peragraph_text">
                  Brokers
                </p>
                {/* <p className="dashboard_top_column_left_bottom_text">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                  25%
                </span>
                Since last week
              </p> */}
              </div>
            </div>
          </Link>
          {/* <Link to="/projects" style={{ textDecoration: "none" }}>
            <div className="dashboard_top_column">
              <div className="dashboard_top_column_main_icon"> */}
          {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="30.665"
                viewBox="0 0 32 30.665"
                className="svg replaced-svg"
              >
                <g id="graph" transform="translate(-8 -8.835)">
                  <g id="bold_1_" transform="translate(8 8.835)">
                    <g
                      id="Group_1113"
                      dataname="Group 1113"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Union_7"
                        dataname="Union 7"
                        d="M.39,12.942a1.336,1.336,0,0,1,0-1.886L8.347,3.1,6.957,1.708A1,1,0,0,1,7.666,0h4.665a1,1,0,0,1,1,1V5.666a1,1,0,0,1-1.708.707l-1.39-1.39L2.276,12.942a1.336,1.336,0,0,1-1.886,0Z"
                        transform="translate(2.669 0)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></path>
                      <g
                        id="Group_1112"
                        dataname="Group 1112"
                        transform="translate(1.334 6.665)"
                      >
                        <path
                          id="Path_1026"
                          dataname="Path 1026"
                          d="M16.667,19.166v7.666h-8V19.166A1.666,1.666,0,0,1,10.333,17.5H15A1.668,1.668,0,0,1,16.667,19.166Z"
                          transform="translate(-8.667 -6.834)"
                          fill="#c11f3b"
                        ></path>
                        <path
                          id="Path_1027"
                          dataname="Path 1027"
                          d="M22,16.5v13H14v-13a1.666,1.666,0,0,1,1.666-1.666h4.666A1.665,1.665,0,0,1,22,16.5Z"
                          transform="translate(-3.334 -9.5)"
                          fill="#c11f3b"
                        ></path>
                        <path
                          id="Path_1028"
                          dataname="Path 1028"
                          d="M27.333,13.833V32.167h-8V13.833A1.666,1.666,0,0,1,21,12.167h4.668A1.666,1.666,0,0,1,27.333,13.833Z"
                          transform="translate(1.999 -12.167)"
                          fill="#c11f3b"
                        ></path>
                      </g>
                      <path
                        id="Path_1029"
                        dataname="Path 1029"
                        d="M39,25.167H9a1,1,0,0,1,0-2H39a1,1,0,1,1,0,2Z"
                        transform="translate(-8 5.498)"
                        fill="#c11f3b"
                        opacity="0.5"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg> */}
          {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c11f3b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path>
                  <polyline points="2.32 6.16 12 11 21.68 6.16"></polyline>
                  <line x1="12" y1="22.76" x2="12" y2="11"></line>
                </svg>
              </div>
              <div className="dashboard_top_column_left_content">
                <h2 className="dashboard_top_column_left_count_text">
                  {dashboard.total_project_count}
                </h2>
                <p className="dashboard_top_column_left_peragraph_text">
                  Projects
                </p> */}
          {/* <p className="dashboard_top_column_left_bottom_text">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                  25%
                </span>
                Since last week
              </p> */}
          {/* </div>
            </div> */}
          {/* </Link>
          <Link to="/complaints" style={{ textDecoration: "none" }}>
            <div className="dashboard_top_column down_grad">
              <div className="dashboard_top_column_main_icon"> */}
          {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.996"
                height="26.985"
                viewBox="0 0 31.996 26.985"
                className="svg replaced-svg"
              >
                <g
                  id="Group_1641"
                  dataname="Group 1641"
                  transform="translate(0.003 -40.092)"
                >
                  <path
                    id="Path_1032"
                    dataname="Path 1032"
                    d="M27.95,40.379c-7.364,3.59-16.356,4-18.951,4.038H2.815A2.819,2.819,0,0,0,0,47.233C0,63.434-.015,62.5.032,62.705a1.32,1.32,0,0,0,.432.714h0a42.008,42.008,0,0,0,8.59.309,55.153,55.153,0,0,0,7.127-.574A43.054,43.054,0,0,0,29.366,59.3a13.8,13.8,0,0,0,2.628-1.272V42.913A2.814,2.814,0,0,0,27.95,40.379Zm1.415,15.943a39.344,39.344,0,0,1-13.555,4.231c-4.688.667-7.368.564-13.184.551V47.233a.188.188,0,0,1,.188-.187H8.057c6.692.106,15.072-1.395,21.045-4.306a.185.185,0,0,1,.264.171Z"
                    transform="translate(0 0)"
                    fill="#c11f3b"
                  ></path>
                  <path
                    id="Path_1033"
                    dataname="Path 1033"
                    d="M186.243,193.368a4.651,4.651,0,1,0-4.651-4.651A4.656,4.656,0,0,0,186.243,193.368Zm0-6.674a2.023,2.023,0,1,1-2.023,2.023,2.025,2.025,0,0,1,2.023-2.023Z"
                    transform="translate(-170.246 -134.976)"
                    fill="#c11f3b"
                  ></path>
                  <path
                    id="Path_1034"
                    dataname="Path 1034"
                    d="M375.136,133.958c.287,0,.222,0,2.418-.735a1.314,1.314,0,0,0-.831-2.493l-2,.667a1.314,1.314,0,0,0,.415,2.561Z"
                    transform="translate(-350.463 -84.909)"
                    fill="#c11f3b"
                    opacity="0.5"
                  ></path>
                  <path
                    id="Path_1035"
                    dataname="Path 1035"
                    d="M65.429,314.851h2a1.314,1.314,0,0,0,0-2.628h-2a1.314,1.314,0,0,0,0,2.628Z"
                    transform="translate(-60.111 -255.125)"
                    fill="#c11f3b"
                    opacity="0.5"
                  ></path>
                  <path
                    id="Path_1036"
                    dataname="Path 1036"
                    d="M39.008,327.06v3.522a2.817,2.817,0,0,1-1.483,2.48c-4.157,2.245-9.31,3.05-14.09,3.05-9.914,0-15.552-3.393-15.795-3.541a1.236,1.236,0,0,1-.161-.117,42,42,0,0,0,8.59.309c6.267,1.27,14.589,1.021,20.207-2.013a.193.193,0,0,0,.1-.168v-2.25A13.8,13.8,0,0,0,39.008,327.06Z"
                    transform="translate(-7.015 -269.034)"
                    fill="#c11f3b"
                    opacity="0.5"
                  ></path>
                </g>
              </svg> */}
          {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c11f3b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12" y2="16"></line>
                </svg>
              </div>
              <div className="dashboard_top_column_left_content">
                <h2 className="dashboard_top_column_left_count_text">
                  {dashboard.total_pending_complaint}
                </h2>
                <p className="dashboard_top_column_left_peragraph_text">
                  Pending Complaints
                </p> */}
          {/* <p className="dashboard_top_column_left_bottom_text">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                  </svg>
                  8.2%
                </span>
                Since last week
              </p> */}
          {/* </div>
            </div>
          </Link> */}
          {/* <div className="dashboard_top_column">
            <div className="dashboard_top_column_main_icon">
              <svg
                width="35"
                height="35"
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M354.992 127.161C354.992 181.745 310.584 226.153 256 226.153C201.416 226.153 157.008 181.745 157.008 127.161C157.008 72.577 201.416 28.169 256 28.169C310.584 28.169 354.992 72.577 354.992 127.161ZM224.874 143.875C220.587 144.944 217.979 149.286 219.047 153.573C222.389 166.976 233.533 176.527 248.001 179.154V184.741C248.001 189.159 251.583 192.741 256.001 192.741C260.419 192.741 264.001 189.159 264.001 184.741V179.279C273.522 177.799 281.849 173.667 287.027 167.68C291.844 162.11 293.9 155.131 292.973 147.497C291.106 132.118 279.131 122.51 257.38 118.939C238.343 115.812 237.974 108.227 237.835 105.371C237.433 97.0786 244.306 92.532 250.871 91.043C259.825 89.012 270.874 91.807 275.413 102.616C277.124 106.691 281.816 108.605 285.887 106.895C289.96 105.185 291.876 100.496 290.165 96.422C284.892 83.863 274.642 77.321 264 75.228V69.58C264 65.162 260.418 61.58 256 61.58C251.582 61.58 248 65.162 248 69.58V75.301C247.927 75.3161 247.853 75.3308 247.78 75.3454C247.63 75.3754 247.48 75.4054 247.332 75.439C231.375 79.059 221.137 91.399 221.854 106.146C222.371 116.803 228.505 130.412 254.788 134.727C273.343 137.774 276.453 144.182 277.09 149.425C277.474 152.587 276.785 155.062 274.925 157.213C271.581 161.079 264.545 163.693 256.998 163.873C248.319 164.07 237.261 160.493 234.572 149.702C233.503 145.415 229.164 142.806 224.874 143.875Z"
                  fill="#C11F3B"
                />
                <path
                  opacity="0.5"
                  d="M256 254.323C326.117 254.323 383.161 197.279 383.161 127.161C383.161 57.044 326.117 0 256 0C185.883 0 128.839 57.044 128.839 127.161C128.839 197.278 185.883 254.323 256 254.323ZM256 16C317.295 16 367.161 65.867 367.161 127.161C367.161 188.456 317.295 238.323 256 238.323C194.705 238.323 144.839 188.456 144.839 127.161C144.839 65.867 194.705 16 256 16Z"
                  fill="#C11F3B"
                />
                <path
                  opacity="0.5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M318.19 449.085L486.725 345.308C494.498 340.521 496.924 326.472 491.53 317.468C483.716 304.424 463.014 305.975 436.153 321.619L343.283 375.711C329.08 383.979 313.807 386.661 296.594 383.908C293.43 383.401 290.347 382.857 287.332 382.28C286.676 382.225 286.016 382.157 285.35 382.074C284.529 381.973 283.753 381.751 283.037 381.428C268.584 378.457 255.531 374.755 241.899 370.889L241.719 370.838C235.647 369.117 229.369 367.336 222.822 365.582C218.555 364.438 216.021 360.052 217.165 355.784C218.309 351.516 222.699 348.987 226.963 350.127C233.584 351.9 239.884 353.687 245.978 355.415L246.266 355.496C260.594 359.559 274.268 363.436 289.477 366.397C297.258 366.876 306.284 364.719 309.342 353.306C311.854 343.932 306.354 334.428 296.516 331.001C268.684 325.914 241.851 316.214 220.26 308.408L220.127 308.36C212.645 305.655 206.176 303.317 200.557 301.496C182.884 295.761 166.075 303.296 150.548 312.293L81.1167 352.52L127.3 434.121L146.094 423.271C147.931 422.208 150.115 421.921 152.164 422.471L274.408 455.227C290.036 459.415 304.765 457.348 318.19 449.085Z"
                  fill="#C11F3B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M128.66 480.528C129.965 479.789 130.91 478.572 131.317 477.101C131.726 475.63 131.543 474.102 130.805 472.796L54.1986 337.437L54.1976 337.436C53.4596 336.131 52.2426 335.188 50.7726 334.78C50.2586 334.638 49.7396 334.567 49.2236 334.567C48.2616 334.567 47.3176 334.814 46.4666 335.294L20.4086 350.041C17.6856 351.582 16.7236 355.05 18.2646 357.773L94.8696 493.133C95.6086 494.438 96.8256 495.382 98.2966 495.789C99.7666 496.198 101.297 496.013 102.603 495.275L128.66 480.528ZM44.754 369.492C49.838 368.749 53.357 364.025 52.614 358.941C51.87 353.857 47.146 350.338 42.062 351.082C36.978 351.825 33.46 356.549 34.203 361.633C34.946 366.716 39.671 370.235 44.754 369.492Z"
                  fill="#C11F3B"
                />
              </svg>
            </div>
            <div className="dashboard_top_column_left_content">
              <h2 className="dashboard_top_column_left_count_text">$45.2k</h2>
              <p className="dashboard_top_column_left_peragraph_text">
                Revenue
              </p>
              <p className="dashboard_top_column_left_bottom_text">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                  12.3%
                </span>
                Since last week
              </p>
            </div>
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
