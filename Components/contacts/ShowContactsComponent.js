import React, {Component} from 'react';
import "../../styles/show-contacts.module.css"
import {
    Table, Tag, Space, ConfigProvider,
    Popconfirm, message, Button, Menu,
    Dropdown, Tooltip , Drawer, List,
    Avatar, Divider, Col, Row
} from 'antd';
import {DeleteOutlined, MoreOutlined, EditOutlined, StarOutlined} from '@ant-design/icons';

const textPopconfirm = 'مشتری حذف شود؟';
const toltipmore = <span>بیشتر</span>;
const toltipdelete = <span>حذف</span>;

function confirm() {
    message.info('حذف شد!');
}

const menu = (
    <Menu>
        <Menu.Item key="0" icon={<StarOutlined/>}>
            <a href="http://www.alipay.com/">نشان </a>
        </Menu.Item>
        <Menu.Item key="1" icon={<EditOutlined/>}>
            <a href="http://www.taobao.com/">ویرایش </a>
        </Menu.Item>
    </Menu>
);

const showDrawer = () => {
    this.setState({
        visible: true,
    });
};

const columns = [
    {
        title: 'نام شرکت',
        dataIndex: 'name',
        key: 'name',
        render: text => <a onClick={showDrawer}>{text}</a>,
    },
    {
        title: 'تلفن',
        dataIndex: 'tell',
        key: 'tell',
        render: text => <a href={`tel: ${text}`}>{text}</a>,
    },
    {
        title: 'آدرس شرکت',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>
                    <ConfigProvider direction="rtl">
                        <Popconfirm placement="topLeft" title={textPopconfirm} onConfirm={confirm} okText="بله"
                                    cancelText="خیر">
                            <Tooltip placement="bottomLeft" title={toltipdelete}>
                                <DeleteOutlined/>
                            </Tooltip>
                        </Popconfirm>
                    </ConfigProvider>
                </a>
                <a>
                    <ConfigProvider direction="rtl">
                        <Dropdown placement='bottomLeft' overlay={menu} trigger={['click']}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <Tooltip placement="topLeft" title={toltipmore}>
                                    <MoreOutlined/>
                                </Tooltip>
                            </a>
                        </Dropdown>
                    </ConfigProvider>

                </a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'طه کسرامهر',
        tell: "09197876086",
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'امین شریفی',
        tell: "09386313173",
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'عرفان منفرد',
        tell: "09125344694",
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '1',
        name: 'طه کسرامهر',
        tell: "09197876086",
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'امین شریفی',
        tell: "09386313173",
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'عرفان منفرد',
        tell: "09125344694",
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '1',
        name: 'طه کسرامهر',
        tell: "09197876086",
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'امین شریفی',
        tell: "09386313173",
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'عرفان منفرد',
        tell: "09125344694",
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '1',
        name: 'طه کسرامهر',
        tell: "09197876086",
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'امین شریفی',
        tell: "09386313173",
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'عرفان منفرد',
        tell: "09125344694",
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const DescriptionItem = ({title, content}) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

class ShowContacts extends Component {

    state = {visible: false};



    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <div className='tak-contacts-show-div'>
                    <ConfigProvider direction="rtl">
                        <Table columns={columns} dataSource={data} pagination={false}/>
                    </ConfigProvider>
                </div>
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
                        User Profile
                    </p>
                    <p className="site-description-item-profile-p">Personal</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Full Name" content="Lily" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Account" content="AntDesign@example.com" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="City" content="HangZhou" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Country" content="China🇨🇳" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Website" content="-" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things as simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p className="site-description-item-profile-p">Company</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Position" content="Programmer" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Department" content="XTech" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <p className="site-description-item-profile-p">Contacts</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Email" content="AntDesign@example.com" />
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={
                                    <a href="http://github.com/ant-design/ant-design/">
                                        github.com/ant-design/ant-design/
                                    </a>
                                }
                            />
                        </Col>
                    </Row>
                </Drawer>
            </>
        );
    }
}

export default ShowContacts;
//
//
// import {} from 'antd';
//
// const DescriptionItem = ({title, content}) => (
//     <div className="site-description-item-profile-wrapper">
//         <p className="site-description-item-profile-p-label">{title}:</p>
//         {content}
//     </div>
// );
//
// class App extends React.Component {
//
//
//     render() {
//         return (
//             <>
//                 <List
//                     dataSource={[
//                         {
//                             name: 'Lily',
//                         },
//                         {
//                             name: 'Lily',
//                         },
//                     ]}
//                     bordered
//                     renderItem={item => (
//                         <List.Item
//                             key={item.id}
//                             actions={[
//                                 <a onClick={this.showDrawer} key={`a-${item.id}`}>
//                                     View Profile
//                                 </a>,
//                             ]}
//                         >
//                             <List.Item.Meta
//                                 avatar={
//                                     <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"/>
//                                 }
//                                 title={<a href="https://ant.design/index-cn">{item.name}</a>}
//                                 description="Progresser XTech"
//                             />
//                         </List.Item>
//                     )}
//                 />
//
//             </>
//         );
//     }
// }
//
// ReactDOM.render(<App/>, mountNode);
