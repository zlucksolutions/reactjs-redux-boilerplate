import React, { Component } from "react";

import Header from "../Header";
import Footer from "../Footer";

// const GET_STARTED_DISALLOWED_ROUTES = [
//     "/account",
// ];

// const shouldGetStaredBeBlocked = path => GET_STARTED_DISALLOWED_ROUTES.some(item => path.startsWith(item));

class Layout extends Component {
    constructor(props) {
        super(props);

        // this.handleCookieModalClick = this.handleCookieModalClick.bind(this);
    }

    componentDidMount() {
        // if (this.props.getAccountData) {
        //     this.props.getAccountData();
        // }

        // this.props.getAssetsData();
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Layout;
