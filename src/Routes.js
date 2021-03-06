import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import CommandsPage from "./pages/CommandsPage";

function redirectToAdd() {
  window.open(
    "https://discord.com/oauth2/authorize?client_id=818570692847992902&permissions=8&scope=bot",
    "_self"
  );
}

function redirectToSupport() {
  window.open("https://discord.gg/ndYpyzAU2Z", "_self");
}

function redirectToTop() {
  window.open("https://top.gg/bot/818570692847992902", "_self");
}

function redirectToBfd() {
  window.open("https://botsfordiscord.com/bot/818570692847992902", "_self");
}

function redirectToDbl() {
  window.open("https://discordbotlist.com/bots/818570692847992902", "_self");
}

function redirectToGit() {
  window.open("https://github.com/Ofira-Bot", "_self");
}

function Routes() {
  return (
    <>
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/add">
            {redirectToAdd}
          </Route>
          <Route exact path="/support">
            {redirectToSupport}
          </Route>
          <Route exact path="/top">
            {redirectToTop}
          </Route>
          <Route exact path="/bfd">
            {redirectToBfd}
          </Route>
          <Route exact path="/dbl">
            {redirectToDbl}
          </Route>
          <Route exact path="/github">
            {redirectToGit}
          </Route>
          <Route exact path="/commands" component={CommandsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default Routes;
