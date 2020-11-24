import React, {Component} from 'react';
import {ConfigProvider, PageHeader, Button, Dropdown, Menu} from 'antd';
import {MenuOutlined, DownOutlined} from '@ant-design/icons';
import "../../styles/panelheaderpage.module.css";

class PageHeaderBack extends Component {
    render() {

        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="http://www.alipay.com/">مشتری ها و شرکت ها</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="http://www.taobao.com/">مشتری ها</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href="http://www.taobao.com/">دسته بندی مشتری ها</a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a href="http://www.taobao.com/">حذف شده ها</a>
                </Menu.Item>
                <Menu.Item key="4">
                    <a href="http://www.taobao.com/">مشتری ها</a>
                </Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="5">ایجاد مشتری جدید</Menu.Item>
            </Menu>
        );

        return (
            <ConfigProvider direction="ltr">
                <div className="row">
                    <div className="tak-panel-header-page">
                        <PageHeader
                            className="site-page-header"
                            onBack={() => null}
                            title="صفحه ی تیتر تست "
                            subTitle="راجب تیتر تست"
                            extra={[
                                <Button key="2" className='d-none d-md-inline-block'>انصراف</Button>,
                                <Button key="1" className='d-none d-md-inline-block' type="primary">
                                    ذخیره
                                </Button>,
                                <Button key="3" className='d-flex d-md-none'>
                                    <ConfigProvider direction="rtl">
                                        <Dropdown overlayStyle={{paddingTop: '10px'}} overlay={menu} trigger={['click']}>
                                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                                <MenuOutlined/>
                                            </a>
                                        </Dropdown>
                                    </ConfigProvider>
                                </Button>,

                            ]}
                        />
                    </div>
                </div>
            </ConfigProvider>
        );
    }
}

export default PageHeaderBack;
