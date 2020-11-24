import React, {Component} from 'react';
import "../../styles/contacts-menu.module.css"
import {Menu, Switch, Divider , ConfigProvider,Button} from 'antd';
import {
    TeamOutlined,
    UserOutlined,
    SolutionOutlined,
    FolderOpenOutlined,
    UserDeleteOutlined,
} from '@ant-design/icons';
import {observer} from "mobx-react";
import ContactsS from "../../Model/ContactsS";
import ShowContacts from "./ShowContactsComponent";

const {SubMenu} = Menu;

const Store = new ContactsS();

@observer class ContactsMenu extends Component {

    constructor(props) {
        super(props);
        this.content = React.createRef();
    }


    contactsMainChanger=()=>{
        // console.log(this.content.current.value);
        Store.changeView(this.content.current.value);
        console.log(Store.ContactsBodyChanger);
    }

    showContacts=()=>{
        Store.changeView("ShowContacts");
        console.log(Store.ContactsBodyChanger);
    }

    showCustomer=()=>{
        Store.changeView("ShowCustomer");
        console.log(Store.ContactsBodyChanger);
    }

    showCompany=()=>{
        Store.changeView("ShowCompany");
        console.log(Store.ContactsBodyChanger);
    }

    favoriteCompanyCustomers=()=>{
        Store.changeView("favoriteCompanyCustomers");
        console.log(Store.ContactsBodyChanger);
    }

    deletedCompanyCustomers=()=>{
        Store.changeView("deletedCompanyCustomers");
        console.log(Store.ContactsBodyChanger);
    }

    render() {

        return (
                <ConfigProvider direction="rtl">
                    <Menu
                        className='tak-contacts-menu'
                        style={{width: "100%" , marginRight: "100px"}}
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                    >
                        <Menu.Item key="1" icon={<TeamOutlined />} onClick={this.showContacts}>
                            مشتری ها و شرکت ها
                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />} onClick={this.showCustomer}>
                            مشتری ها
                        </Menu.Item>
                        <Menu.Item key="3" icon={<SolutionOutlined />} onClick={this.showCompany}>
                            شرکت ها
                        </Menu.Item>
                        <Menu.Item key="4" icon={<FolderOpenOutlined />} onClick={this.favoriteCompanyCustomers}>
                            دسته بندی مشتری ها
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UserDeleteOutlined />} onClick={this.deletedCompanyCustomers}>
                            حذف شده ها
                        </Menu.Item>
                        <Menu.Item key="6">
                            <div className="row">
                                <Button className='tak-menu-btn-customer' type="primary" size='large' value="FormAntD" ref={this.content} block onClick={this.contactsMainChanger}>
                                    ایجاد مشتری جدید
                                </Button>
                            </div>
                        </Menu.Item>

                    </Menu>
                </ConfigProvider>
        );
    }
}

export default ContactsMenu;