import React, {Component} from 'react';
import HeaderPanelComponent from "../Components/Panel/HeaderPanelComponent";
import ProfileSlide from "../Components/Panel/ProfileSlideComponent";
import Widgets from "../Components/Panel/WidgetsComponent";
import  "../styles/panel-styles/panel.module.css";
import FooterCopy from "../Components/Panel/FooterCopyComponent";

class Panel extends Component {
    render() {
        return (
            <div className="tak-main-body-panel">
                <HeaderPanelComponent/>
                <ProfileSlide/>
                <Widgets/>
                <FooterCopy/>
            </div>
        );
    }
}

export default Panel;