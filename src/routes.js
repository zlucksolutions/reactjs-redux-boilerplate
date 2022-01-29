import { Navigate } from "react-router-dom";
import AuthPage from "./component/Layout/AuthPage";
import Layout from "./component/Layout/MainLayout";
import UsersListPage from "./pages/User/UsersListPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import LoginPage from "./pages/Login/LoginPage";
import Page404 from "./pages/Page404/Page404";
import VerifyOtpPage from "./pages/Login/VerifyOtpPage";
import UserDetailPage from "./pages/User/UserDetailPage";
import { routes } from "../src/constants";

const getRoutes = (user) => [
  {
    path: routes.homepage,
    element: !user ? <AuthPage /> : <Navigate to={routes.dashboard} />,
    children: [
      { path: routes.login, element: <LoginPage /> },
      { path: routes.verifyOtp, element: <VerifyOtpPage /> },
      { path: routes.homepage, element: <Navigate to={routes.login} /> },
    ],
  },
  {
    path: routes.homepage,
    element: user ? <Layout /> : <Navigate to={routes.login} />,
    children: [
      { path: routes.dashboard, element: <DashboardPage /> },
      { path: routes.users, element: <UsersListPage /> },
      { path: routes.userDetail, element: <UserDetailPage /> },
      { path: routes.homepage, element: <Navigate to={routes.dashboard} /> },
    ],
  },
  {
    path: "",
    element: !user ? <Navigate to={routes.login} /> : <Page404 />,
    children: [
      { path: routes.login, element: <LoginPage /> },
      { path: "*", element: <LoginPage /> },
    ],
  },
];

export default getRoutes;
