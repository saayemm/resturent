import logo from '../../assets/resLogo.png'
import { Link } from "react-router";
import { TiSocialFacebook } from "react-icons/ti";
import { RiLinkedinFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#151515] pt-8 mx-auto">
        <div className="flex justify-between max-w-[1240px] mx-auto">
        <div className='flex gap-8'>
            <Link to='/'><img className='max-w-[260px]' src={logo} alt="" /></Link>

            <div className='border border-l-amber-50 border-t-0 border-l-1 border-r-0 border-b-0 
        flex gap-4 text-white justify-center items-center px-8'>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/ourmenu'>Our Menu</Link>
            <Link to='/'>Our Shop</Link>
            <Link to='/'>Dashboard</Link>
        </div>
        </div>

        

       <div className='w-1/4'>
        <h3 className='text-white text-2xl font-semibold mb-4 '>Follow Us on</h3>
       <div className='flex gap-4 text-white text-3xl  items-center'>
        <a href="#"><TiSocialFacebook /></a>
        <a href="#"><RiLinkedinFill /></a>
        <a href="#"><FaInstagram /></a>
        </div>
       </div>
        </div>
        <div className='w-full h-[1px] bg-gray-800 m-8  max-w-[1240px] mx-auto'>

        </div>
        <div className='text-white  pb-8 mx-auto max-w-[1240px]'>
            <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer