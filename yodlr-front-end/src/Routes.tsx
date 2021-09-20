import { Switch, Route } from "react-router-dom";
import Admin from "./Admin";
import RegistrationForm from "./RegistrationForm";
import Welcome from "./Welcome";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/register">
                <RegistrationForm />
            </Route>
            <Route exact path="/admin">
                <Admin />
            </Route>
        </Switch>);
}

export default Routes;