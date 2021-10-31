import React, {Component} from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import Nav from '../nav'
import QuickBlock from '../quick-block';
import Sheulder from '../sheulder' 

import './app.scss';
import Counter from '../send';

const counter = new Counter();

class App extends Component{
    constructor(props) {
        super(props);
        

    }
    render(){
        return (
            <Router>
                <div className="organizer">
                    <div className="main-content">
                        <Nav />
                        <Switch>
                            <Route exact path='/' component={Sheulder}></Route>
                            
                        </Switch>
                    </div>
                    <div className="quick">
                        <QuickBlock></QuickBlock>
                    </div>
                </div>
            </Router>
           
        )
    }
}

export default App;