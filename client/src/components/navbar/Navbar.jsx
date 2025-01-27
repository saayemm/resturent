import logo from '../../assets/resLogo.png'
import shop from '../../assets/shopIcon.png'
import { FaRegChessQueen } from "react-icons/fa6";
import { Link } from "react-router";

const Navbar = () => {
  return (
    // Nav main
    <div className="flex justify-between bg-[#151515] text-white items-center p-8">
        {/* Logo  div */}
        <div>
            <Link to='/'><img className='max-w-[200px]' src={logo} alt="" /></Link>
        </div>

    {/* Menu div */}
        <div className='hidden md:flex gap-8 font-semibold '>
            <Link to='/'>Home</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Our Menu</Link>
            <Link to='/'>Our Shop</Link>
            <Link to='/'>Dashboard</Link>
        </div>

    {/* Right Menu */}
        <div className='flex gap-4 items-center font-semibold'>
             <div>
                <Link to='#'><img className='max-w-[48px]' src={shop} alt="" /></Link>
             </div>
             <Link to='#'>Signout</Link>
             <div className='p-2 border-2 border-amber-200 rounded-full'>
             <Link to='#' ><FaRegChessQueen /></Link>
             </div>
        </div>

    </div>
  )
}

export default Navbar