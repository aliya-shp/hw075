import React, {Component} from 'react';
import MainPage from "./containers/MainPage/MainPage";

import './App.css';
import {Container} from "reactstrap";
import {Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Container>
                <Switch>
                    <Route path="/main" exact component={MainPage}/>
                </Switch>
            </Container>
        );
    }
}

export default App;