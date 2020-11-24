import React, {Component} from 'react';
import {Input} from 'antd';
import {ConfigProvider, Avatar, Badge} from 'antd';
import {AudioOutlined, InfoCircleOutlined, BellOutlined, UserOutlined,SearchOutlined} from '@ant-design/icons';
import "../../styles/panel-styles/header-panel.module.css";
import Link from 'next/link';


class HeaderPanelComponent extends Component {
    render() {
        return (
            <>
                <div className="header-panel-wide">
                    <div className="container">
                        <div className="header-panel">
                        <span className="tak-panel-header-right">
                            <img src="/homepage/roboboxs1.svg" className="logo-header-panel" alt=""/>
                            <ul className="ul-header-panel">
                                <li className="li-header-panel">
                                    <Link href="/panel">
                                        <a className='tak-panel-header-a-link'>امروز</a>
                                    </Link>
                                </li>
                                <li className="li-header-panel">
                                    <Link href="/contacts">
                                        <a className='tak-panel-header-a-link'>اشخاص و شرکت ها</a>
                                    </Link>
                                </li>
                                <li className="li-header-panel">
                                    <Link href="/">
                                        <a className='tak-panel-header-a-link'>سرنخ ها</a>
                                    </Link>
                                </li>
                                <li className="li-header-panel">
                                    <Link href="/">
                                        <a className='tak-panel-header-a-link'>پیام ها</a>
                                    </Link>
                                </li>
                                <li className="li-header-panel">
                                    <Link href="/">
                                        <a className='tak-panel-header-a-link'>فعالیت ها</a>
                                    </Link>
                                </li>
                                <li className="li-header-panel">
                                    <Link href="/">
                                        <a className='tak-panel-header-a-link'>اهداف</a>
                                    </Link>
                                </li>
                                <li className="li-header-panel">
                                    <Link href="/">
                                        <a className='tak-panel-header-a-link'>گزارشات</a>
                                    </Link>
                                </li>
                            </ul>
                        </span>
                            <span className="tak-panel-header-left">
                            <div className="tak-header-panel-search-div">
                                <SearchOutlined className="tak-header-panel-search-icon"/>
                                <input type="text" className='tak-panel-header-search' placeholder='جستجو'/>
                            </div>
                            <InfoCircleOutlined style={{fontSize: "20px", color: "#FFF",paddingLeft:"20px"}}/>
                            <BellOutlined style={{fontSize: "20px", color: "#FFF",paddingLeft:"20px"}}/>
                            <Badge dot>
                                <Avatar size={35} icon={<UserOutlined/>}/>
                            </Badge>
                        </span>
                        </div>
                    </div>
                </div>
                <div className="tak-header-fake"/>
            </>

        );
    }
}

export default HeaderPanelComponent;


