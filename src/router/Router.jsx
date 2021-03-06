import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/template_form/DefaultLayout";
import { HeaderOnly } from "../components/template_form/HeaderOnly";

export const RouterComponents = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DefaultLayout>
                        <Top />
                    </DefaultLayout>
                </Route>

                <Route path="/users">
                    <HeaderOnly>
                        <Users />
                    </HeaderOnly>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};