/*
import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import CustomLayout  from "./components/CustomLayout";


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIp" element={<SignIn />} />
        <Route>
          <CustomLayout>
          <Routes>
              
           </Routes>
          </CustomLayout>
        </Route>
      </Routes>
    </Router>
  );
};



export default App;
*/
/*import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Signup from './pages/Signup'
import Layout from 'antd/es/layout/layout';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<SignIn />} />
        <Route path='/' element= {<Signup/>} />
        <Route path='/' element = {<Layout />} />
        </Routes>

    </Router>
  
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
//import AppLayout from './components/AppLayout';
import Home from  './pages/Home';
import Signin from './pages/SignIn';
import AppLayout from './components/AppLayout';

/*import Profile from './pages/Profile';
import Signup  from './pages/Signup';
import MyPosts from './pages/MyPosts';
import MyLikes from './pages/MyLikes';
import MyBookmarks from './pages/MyBookmarks';
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<AppLayout/>} />
      <Route index element={<Home />} />
        <Route path='/' element={<Signin/>} />
        
        <Route path='/' element={<Profile/>} />
        <Route path='/' element={<Signup/>} />
        <Route path='/' element={<MyPosts/>} />
        <Route path='/' element={<MyLikes/>} />
        <Route path='/' element={<MyBookmarks/>} />

        
      </Routes>
    </Router>
  );
};

        

export default App;
*/
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Signin from './pages/SignIn';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyLikes from './pages/MyLikes';
import MyPosts from './pages/MyPosts';


const App = () => {
  return (
    <Router>
      <Routes>
       
          <Route index element={<Home />} />
          <Route index element = {<Layout/>} />
          <Route index element={<Signin />} />
          <Route index element={<MyLikes />}/>
          <Route element={<MyPosts />}/>
          <Route element={<Profile />}/>
 
      </Routes>
    </Router>
  );
};
export default App;
*/
import { BookOutlined, HomeOutlined, LikeOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
       // defaultSelectedKeys={['4']}
      
       
       /* items={[HomeOutlined,ProfileOutlined,LikeOutlined,UserOutlined].map(
          (icon,index)=>({
             key:String(index+1),
             icon:React.createElement(icon),
             label:`Home${index+1}`
            
        }),
      )}
      */
     items={[
      {label:"Home",key:"/" ,icon:<HomeOutlined />},
      {label:" My Profile",key:"/Myprofile" ,icon:<ProfileOutlined />},
      {label:"My Like",key:"/Mylike" ,icon:<LikeOutlined />},
      {label:"My Bookmarks",key:"/MyBookmarks" ,icon:<BookOutlined />},
      {label:"My Posts",key:"/Myposts" ,icon:<UserOutlined/>},
     ]}
     
      />
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign:'center' }}></Footer>
    </Layout>
    </Layout>
);

export default App;