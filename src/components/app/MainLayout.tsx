import { Layout, Menu } from 'antd';
import Link from 'next/link';

const { Header, Content, Footer } = Layout;

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Layout className="min-h-screen">
    <Header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Your Name
        </Link>
        <Menu mode="horizontal" defaultSelectedKeys={["home"]} className="bg-transparent">
          <Menu.Item key="home">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link href="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="projects">
            <Link href="/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link href="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>

    <Content className="container mx-auto py-16">
      {children}
    </Content>

    <Footer className="text-center bg-gray-100 py-4">
      © 2025 Joshua Kaplan. Code licensed under MIT.
    </Footer>
  </Layout>
);
