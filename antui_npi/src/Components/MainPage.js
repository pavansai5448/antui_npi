import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  SnippetsOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import './MainPage.css';
import { Layout, Menu, Button, theme } from 'antd';
import Tinting from './Forms/TintingBanco.js';

const { Header, Sider, Content } = Layout;
const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed} width="265px">
          <img className="logo" title="Nippon Paint India" src="https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png" alt="Nippon Paint India"  />
          
          
        
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'User',
              },
              {
                key: '2',
                icon: <FormOutlined />,
                label: 'Forms',
              },
              {
                key: '3',
                icon: <SnippetsOutlined />,
                label: 'Report',
              },
              {
                key: '4',
                icon: <FileImageOutlined />,
                label: 'Image',
              },


            ]}
          />
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
              float: "left",
            }}

          />

          <p style={{float:"right",fontSize:24,margin:0,paddingRight:10}}>Hello Pavan</p>
        </Header>
        <Content className="MainPageContent"
          style={{
    
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            maxHeight: 'calc(100vh - 48px)',
            background: colorBgContainer,
          }}
        >
          <Tinting />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainPage;