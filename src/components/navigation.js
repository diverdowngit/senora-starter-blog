import React, { useState, useEffect }from 'react'
import {
    AiOutlineInstagram,
    AiOutlineYoutube,
  } from 'react-icons/ai';
  import { FaFacebookF } from 'react-icons/fa';
 
import { Link } from 'gatsby';
import Logo from '../images/Logo.png';
import '../styles/layout.module.css'
import {container,active,wrapper,logo,menuContainer,hamburgermenu,menubtn,topbun,meat,bottombun,menu,menuitem,social}from '../styles/Navbar.module.css';
import Seo from "../components/seo"



const Navigation = () => {
  const [bgColor, setBgColor] = useState("transparent")

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 704) {
        setBgColor('rgba(112,214,251)')

        
      } else {
        setBgColor("transparent")
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
    style={{ backgroundColor: bgColor }} className={container}>
    
  
    <div className={wrapper}>
      <div className={logo}><Link to='/'><img src={Logo} alt="logo of sea senora"/></Link></div>
      <div className={menuContainer}>
        <div className={hamburgermenu}>
        <input id="menutoggle" type="checkbox" />
  <label className={menubtn} htmlFor="menutoggle">
  <div className={topbun}></div>
<div className={meat}></div>
<div className={bottombun}></div>
  </label>
        <ul className={menu}>
         
          <li className={menuitem}>
            <Link to='/PhotoGallery'>Photo Gallery</Link>
          </li>
          <li className={menuitem}>
            <Link to='/blog'>blog</Link>
          </li>
          <li className={menuitem}>
            <Link to='/about'>about</Link>
          </li>
          <li className={menuitem}>
            <Link to='/Keepafloat'>Keep afloat</Link>
          </li>
          <li className={menuitem}>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        </div>
      </div>
      <div className={social}>
      <a href="https://www.instagram.com/svseasenora/"target="_blank"  rel="noopener noreferrer"><AiOutlineInstagram /></a>
          <a href="https://www.youtube.com/channel/UCpaA07tlk3PA44WApp8oKDw"target="_blank"  rel="noopener noreferrer"><AiOutlineYoutube /></a> 
          <a href="https://www.facebook.com/profile.php?id=100085674495009" target="_blank"  rel="noopener noreferrer"><FaFacebookF /></a>
       

        
{/* <button className={btnsearch}>  <AiOutlineSearch/>
</button>  */}
{/* <input id="inputtext" type="text" className={inputSearch} placeholder="Type to Search..."
  onChange={searchHandle}
/>
<div id="disable">
{result && result.map((suggestion,i) =>
<div id="selectbox" className={styles.suggestiontext} onClick={event => handleClick(event, suggestion._id)} key={i}>{suggestion.location} </div>
)}
</div> */}
{/* <select value={selectedValue} id='selectBox' onChange={changeFun} className={styles.suggestion} >
  <option >{'Please select'}</option>
    {result.map((item, index) => (
    <>
      <option value={item._id}>{item.location}</option>
    </>
     ))}
</select> */}
</div> 
      </div>
    </div>
 
  )
}
export const Head = () => <Seo title="Navbar" />
export default Navigation