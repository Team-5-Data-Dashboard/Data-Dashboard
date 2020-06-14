import React, { Component } from 'react';
import NavBar from './NavBar.js';
import RacialBreakdown from './RacialBreakdown.js';

class Main extends Component {
    render() {
        return (
            <>
                <div>
                    <NavBar />
                </div>
                <div>
                    <RacialBreakdown />
                </div>
            </>
        )
    }
}

export default Main;