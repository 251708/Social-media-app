import React from "react";
import { BrowserRouter as  Router, Routes,Route,useNavigate } from "react-router-dom";
import { BookOutlined, HomeOutlined, LikeOutlined, PoweroffOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import {  Menu } from 'antd';


function App(){
 return(
  <div>
      <Header />
      <div>
        <SideMenu />
        <Content />
      </div>
      <Footer />
    </div>
 );
}
function Header(){
  return<div>Header</div>
}
function Footer(){
  return<div>Footer</div>
}
  function SideMenu(){
    const navigate = useNavigate();
  return(
    <div style={{display:'flex',flexDirection:'row'}}>
      <Menu
      onClick={({key})=>{
       if(key === "signout"){
        
       }else{
        navigate(key);
       }
      }}
      items={[
        {label:"Home",key:"/" ,icon:<HomeOutlined />},
        {label:" My Profile",key:"/Myprofile" ,icon:<ProfileOutlined />},
        {label:"My Like",key:"/Mylike" ,icon:<LikeOutlined />},
        {label:"My Bookmarks",key:"/MyBookmarks" ,icon:<BookOutlined />},
        {label:"My Posts",key:"/Myposts" ,icon:<UserOutlined/>},
        {label:"Signout",key:"/signout" ,icon:<PoweroffOutlined/>},
       ]}
      ></Menu>
      <Content />
  
    </div>
  );
}
function Content() {
  return(
  <div>
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/Myprofile" element={<div>MyProfile</div>}></Route>
      <Route path="/Mylike" element={<div>MyLike</div>}></Route>
      <Route path="/MyBookmarks" element={<div>MyBookmarks</div>}></Route>
      <Route path="/Myposts" element={<div>MyPosts</div>}></Route>
    </Routes>
  </div>

  );  
}

export default App;