import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { Layout } from "./components";
import { easyLazy } from "./helpers/easyLazy";
import { useEffect } from "react";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { refreshThunk } from "./redux/auth/operations";

const Home = easyLazy("HomePage");
const Login = easyLazy("LoginPage");
const Contacts = easyLazy("ContactsPage");
const Registration = easyLazy("RegistrationPage");

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </Layout>
  );
};

export default App; 
