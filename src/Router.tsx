import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import { ROUTE } from "./constants/route";
import Home from "./routes/Home";
import Layout from "./components/Layout";
import SignUp from "./routes/Signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTE.HOME} exact>
          <Layout>
            <Home></Home>
          </Layout>
        </Route>
        <Route path={ROUTE.LOGIN}>
          <Login></Login>
        </Route>
        <Route path={ROUTE.SIGNUP}>
          <SignUp></SignUp>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
