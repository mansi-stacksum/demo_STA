import Layout from "../layout";
import Dashboard from "../pages/dashboard";

export const Router = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Dashboard /> }],
  },
];
