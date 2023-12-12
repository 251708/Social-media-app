import React from "react";
import { BrowserRouter as  Router, Routes,Route,useNavigate } from "react-router-dom";
import { BookOutlined, HomeOutlined, LikeOutlined, PoweroffOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';
import {  Menu } from 'antd';


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