import { useNavigate, Outlet } from '@umijs/max';
import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;

const items = [
  { label: '主页', key: 'home' }, // 菜单项务必填写 key
  { label: '绘图', key: 'graph' },
  { label: '计数器', key: 'counter' },
  {
    label: '子菜单',
    key: 'submenu',
    children: [{ label: '子菜单项', key: 'submenu-item-1' }],
  },
];

const PageLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ height: '100%' }}>
      <Header>
        <div className="logo">Logo</div>
      </Header>
      <Layout>
        <Sider width={200}>
          <Menu
            mode="inline"
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            onClick={({ key }) => {
              navigate(`/${key}`);
            }}
          />
        </Sider>
        <Layout>
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
