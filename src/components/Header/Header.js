
import logo from "../../images/logo.png";

const Header = () => {
   
    return (
        <nav>
               <a href="/" className="logo">    
               <img src={logo} alt="logo" width="700" />
               </a>
        </nav>
    )
}
export default Header;