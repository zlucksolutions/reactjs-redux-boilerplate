import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

import StaticMenu from "./StaticMenu";
import UserMenu from "./UserMenu";
// import { routes } from '../../shared/constants';
// import { toggleMenu } from "./helpers";

const Header = (props) => {
    const {
        user,
    //     isInvestEnabled,
    //     userEmail
    } = props;

    // const logo = (
    //     <div id={"top"}>
    //         <Link to={(user != null) ? routes.dashboard : routes.homepage}>
    //             <NavigationLogo />
    //         </Link>
    //     </div>
    // );

   const menu = (user != null) ? <UserMenu user={user} /> : <StaticMenu />;

    return (
        <div>
            <Row>
                <Col>
                    <h1>Header</h1>
                </Col>
                <Col>
                    {menu}
                </Col>
            </Row>
            <hr/>
        </div>
    );
}

/*
// Header.propTypes = {
//     isLoggedIn: PropTypes.bool.isRequired,
//     isConfirmed: PropTypes.bool.isRequired,
//     userEmail: PropTypes.string.isRequired,
//  };
*/

export default Header;
