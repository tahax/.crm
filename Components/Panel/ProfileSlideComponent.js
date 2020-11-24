import React, {Component} from 'react';
import "../../styles/panel-styles/profile-slide.module.css";

import {UserOutlined} from "@ant-design/icons";
import {Avatar} from "antd";

class ProfileSlide extends Component {


    render() {
        return (
            <div className='tak-profile-slide'>
                <div className="tak-pf-gradiant">

                </div>
                <img src="/panel/steve-richey-6xqAK6oAeHA-unsplash.jpg" alt="" className="tak-cover-pf-img"/>
                <div className="tak-date">
                    <div className="container">
                        <div className="tak-roz-tarikh">
                            <span className="tak-roz">
                                امروز یکشنبه
                            </span>
                            <span className="tak-tarikh">
                                28 آبان
                            </span>
                        </div>
                    </div>
                </div>
                <div className="tak-div-pf-tasks">
                    <div className="container">
                        <div className="tak-pf-tasks-inner">
                            <div className="tak-slide-pf">
                                <Avatar size={65} icon={<UserOutlined />} />
                                <span className="tak-slid-name-semat">
                                    <span className="tak-slide-name">
                                        طه کسرامهر
                                    </span>
                                    <span className="tak-slide-semat">
                                        طراح سایت
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileSlide;