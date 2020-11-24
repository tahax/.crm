import React, {Component} from 'react';
import "../../styles/bootstrap-grid.min.css"
import "../../styles/header-landing.module.css";
import SignUp from "./SignupComponent";
import SignIn from "./SigninComponent";

class Header extends Component {
    render() {
        return (
            <div className="tak-header-wide">
                <div className="container">
                    <div className="tak-header">
                        <img src="/homepage/roboboxs.svg" alt="" className="tak-logo"/>
                        <span className="tak-signin-signup">
                            <SignIn/>
                            <SignUp/>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;