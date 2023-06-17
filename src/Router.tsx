import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./routes/Login";
import { ROUTE } from "./constants/route";
import Home from "./routes/Home";
import Layout from "./components/Layout";
import SignUp from "./routes/Signup";
import Teams from "./routes/team/Index";
import TeamsEdit from "./routes/team/Edit";

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
        <Route path={ROUTE.TEAM_LIST} exact>
          <Layout>
            <Teams />
          </Layout>
        </Route>
        <Route path={`${ROUTE.TEAM_EDIT}/:teamId`}>
          <Layout>
            <TeamsEdit />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
