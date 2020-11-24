import React, {Component} from 'react';
import "../../styles/panel-styles/footercopypanel.module.css";

class FooterCopy extends Component {
    render() {
        return (
            <div className='tak-footer-copy-panel'>
                <div className="container">
                    <div className="tak-inner-footer-panel">
                        Copyright © 2020 RoboBoxs TK
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterCopy;