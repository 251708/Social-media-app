/*import React from "react";
import { BrowserRouter as  Router, Routes,Route,useNavigate } from "react-router-dom";
import { BookOutlined, HomeOutlined, LikeOutlined, PoweroffOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import {  Menu } from 'antd';
import Home from './pages/Home'
import Profile from './pages/MyProfile'
import MyLikes  from "./pages/MyLikes";
import MyPosts from "./pages/MyPosts";
import MyBookmarks from "./pages/MyBookmark";


function App(){
 return(
  <div
  style={{
    display:"flex",
    flexDirection:"column",
    flex:1,
    height:"100vh"
  }}>
      <Header />
      <div style={{display:'flex',flexDirection:'row',flex:1}}>
        <SideMenu />
       <Content />
      </div>
      <Footer />
    </div>
 );
}
function Header(){
  return<div style={{
    height:50,
    backgroundColor:"lightskyblue",
     color:'white',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     fontWeight:"bold",
      }}>Header</div>
}
function Footer(){
  return<div style={{
    height:50,
    backgroundColor:"lightgray",
     color:'Black',
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     fontWeight:"bold"
     }}>Footer</div>
}
  function SideMenu(){
    const navigate = useNavigate();
  return(
   
      <Menu
       onClick={({key})=>{
       if(key === "signout"){
        
       }else{
        navigate(key);
       }
      }}
      
     
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        {label:"Home",key:"/" ,icon:<HomeOutlined />},
        {label:" My Profile",key:"/Myprofile" ,icon:<ProfileOutlined />},
        {label:"My Like",key:"/Mylike" ,icon:<LikeOutlined />},
        {label:"My Bookmarks",key:"/MyBookmarks" ,icon:<BookOutlined />},
        {label:"My Posts",key:"/Myposts" ,icon:<UserOutlined/>},
        {label:"Signout",key:"/signout" ,icon:<PoweroffOutlined/>},
       ]}
      ></Menu>
    
  
  

  );
}
function Content() {
  return(
  <div>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Myprofile" element={<Profile />}></Route>
      <Route path="/Mylike" element={<MyLikes />}></Route>
      <Route path="/MyBookmarks" element={<MyBookmarks />}></Route>
      <Route path="/Myposts" element={<MyPosts />}></Route>
    </Routes>
  </div>

  );  
}

export default App;
*/


/*import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// Import your components for the different pages
import Home from './pages/Home';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import Sidebar from './pages/Sidebar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
       
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

 
      {window.location.pathname !== '/signup' && window.location.pathname !== '/signin' && <Sidebar />}
    </BrowserRouter>
  );
};

export default App;
*/
import React from 'react';
import {  Route, Routes } from 'react-router-dom';

// Import your components for the different pages
import Home from './pages/Home';
import SignUp from './pages/Signup';
import SignIn from './pages/SignIn';
import Sidebar from './pages/Sidebar';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      {/* Conditional rendering for sidebar */}
      {window.location.pathname !== '/signup' && window.location.pathname !== '/signin' && <Sidebar />}
      </div>
  );
};

export default App;



