import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  SnippetsOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';
import Tinting from './Forms/TintingBanco.js';
import NipponLogo from '../Assets/Nipponlogo1.png';
import ColourantBanco from './Forms/ColourantBanco';
import Observation from './Forms/Observation';
import './MainPage.css';
import TintingTable from './TintingTable.js';
import FillPage from './FillPage.js';
import ObservationTable from './ObservationTable.js';
import Login from './Login.js';
const { Header, Sider, Content } = Layout;


const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'User',
      linkTo: '/user',
    },
    {
      key: '2',
      icon: <FormOutlined />,
      label: 'Observation',
      linkTo: '/observationtable',
    },
    {
      key: '3',
      icon: <FormOutlined />,
      label: 'Tinting',
      linkTo: '/tintingtable',
    },
    // {
    //   key: '4',
    //   icon: <FormOutlined />,
    //   label: 'ColourantBangalore',
    //   linkTo: '/colourant',
    // },

  ];

  return (
    <div className='MainRouter'>
    <Router>
      <Layout style={{ height: 'calc(100vh)' }}>
        <Sider trigger={null} collapsible collapsed={collapsed} width="265px">
          {collapsed ? (
            <img
              className="logo"
              title="Nippon Paint India"
              src={NipponLogo}
              style={{ height: '60px', width: '60px' }}
              alt="Nippon Paint India"
            />
          ) : (
            <img
              className="logo"
              title="Nippon Paint India"
              src="https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png"
              alt="Nippon Paint India"
            />
          )}

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.linkTo}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 64,
                height: 64,
                float: 'left',
              }}
            />

            <p className="hellouser" style={{ float: 'right', fontSize: 24, margin: 0, paddingRight: 10 }}>
              Hello Pavan
            </p>
          </Header>
          <Content
            className="MainPageContent"
            style={{
              // margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              maxHeight: 'calc(100vh - 48px)',
              background: colorBgContainer
            }}
          >
            <Routes>
              <Route exact path="/" element={<Login/>} />
              {/* <Route exact path="/user" element={<TintingTable />} /> */}
              {/* <Route path="/viewreport" element={<Report />} /> */}
              <Route path="/observationform" element={<Observation />} />
              <Route path="/observationtable" element={<ObservationTable />} />
              <Route path="/tinting" element={<FillPage />} />
              <Route path="/colourant" element={<ColourantBanco />} />
              <Route path="/tintingtable" element={<TintingTable  />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
    </div>
  );
};

export default MainPage;