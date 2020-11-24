import React, {Component} from 'react';
import {ConfigProvider, Button, Form, Input, Modal, Space, Typography} from "antd";
import "../../styles/bootstrap-grid.min.css";
import "../../styles/signup.module.css";
import {MailOutlined, EyeInvisibleOutlined, EyeTwoTone, LockOutlined, UserOutlined} from "@ant-design/icons";

class SignUp extends Component {

    state = {
        visible: false,
        loadings: [],
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    enterLoading = index => {
        this.setState(({loadings}) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({loadings}) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {

        const {Text, Link} = Typography;

        const {loadings} = this.state;

        return (


            <ConfigProvider direction="rtl">
                <Button type="primary" className="tak-btn-sabtenam" onClick={this.showModal}>
                    ثبت نام
                </Button>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={null}
                    width={"400px"}
                >
                    <div className="tak-modal">
                                    <span className="title-signin">
                                        ورود به پروفایل
                                    </span>
                        <span className="signin-description">
                                        برای ورود نام کاربری و رمزعبور را وارد کنید
                                    </span>
                        <Form
                            style={{width: "100%"}}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا نام کاربری خود را وارد کنید!',
                                    },
                                ]}
                            >
                                <span className="user-name-input">
                                         <Input size="large" placeholder="نام کاربری" prefix={<UserOutlined/>}/>
                                    </span>
                            </Form.Item>
                            <Form.Item
                                name={['user', 'email']}
                                rules={[
                                    {
                                        type: 'email',
                                    },
                                ]}
                            >
                                <Input size="large" prefix={<MailOutlined />} placeholder="ایمیل"/>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'لطفا رمز عبور خود را وارد کنید!',
                                    },
                                ]}
                            >
                                <span className="user-name-input">
                                         <Input.Password
                                             placeholder="رمز عبور"
                                             prefix={<LockOutlined/>}
                                             size="large"
                                             iconRender={visible => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                         />
                                    </span>
                            </Form.Item>
                            <Form.Item>
                                <span className="tak-btn-span">
                                         <Button type="primary" loading={loadings[0]}
                                                 onClick={() => this.enterLoading(0)} size="large" block>
                                             ثبت نام
                                         </Button>
                                    </span>
                            </Form.Item>
                        </Form>
                        <span className='tak-hr-signin'/>
                        <span className="forgetpass-span">
                                    قبلا ثبت نام کرده اید ؟
                                        <Link href="https://ant.design" target="_blank"> ورود</Link>
                                    </span>
                    </div>
                </Modal>
            </ConfigProvider>
        );
    }
}

export default SignUp;