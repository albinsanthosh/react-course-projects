import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import PortfolioHomePage from "../components/PortfolioHomePage"
import EditPage from "../components/EditPage";
import ContactPage from "../components/ContactPage";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path="/" component={HomePage} exact={true}/>
            <Route path="/portfolio" component={PortfolioHomePage} exact={true}/>
            <Route path="/portfolio/:id" component={EditPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route component={NotFoundPage}/>
            </Switch>
        </div>       
    </BrowserRouter>
);

export default AppRouter;