import { NavLink, useNavigate } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState([])
  const users = useUser()
  const navigate = useNavigate()
// console.log(users);
// if(users.email === localStorage.getItem('email')){
//   setUser(users)

  useEffect(() => {
    const userEmail = localStorage.getItem('email');
    const result = users.find((user) => user.email === userEmail);
    if (result) {
      setUser(result);
      // window.location.reload(false);
    } else {
      setUser({});
    }
  }, [users]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    setUser({});
    navigate('/');
  };
    const navItems = 
        <>
         <li>
            <NavLink to='/'
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "bold",
                color: isPending ? "white" : "",
                 backgroundColor: isActive ? "green" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
            > 
            Home
            </NavLink>
         </li>
         <li>
            <NavLink to='/register'
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "bold",
                color: isPending ? "white" : "",
                 backgroundColor: isActive ? "green" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
            > 
            Register
            </NavLink>
         </li>
         <li>
            <NavLink to='/login'
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                fontWeight: isActive ? "bold" : "bold",
                color: isPending ? "white" : "",
                 backgroundColor: isActive ? "green" : "",
                viewTransitionName: isTransitioning ? "slide" : "",
                };
            }}
            > 
            Login
            </NavLink>
         </li>
         {user.role === 'Owner' ? (
              
                <li>
                <NavLink to='/ownerDashboard'
                style={({ isActive, isPending, isTransitioning }) => {
                    return {
                    fontWeight: isActive ? "bold" : "bold",
                    color: isPending ? "white" : "",
                     backgroundColor: isActive ? "green" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    };
                }}
                > 
                Owner Dashboard
                </NavLink>
             </li>
            ) : (user.role === 'Renter' ? <li>
              <NavLink to='/renterDashboard'
              style={({ isActive, isPending, isTransitioning }) => {
                  return {
                  fontWeight: isActive ? "bold" : "bold",
                  color: isPending ? "white" : "",
                   backgroundColor: isActive ? "green" : "",
                  viewTransitionName: isTransitioning ? "slide" : "",
                  };
              }}
              > 
              Renter Dashboard
              </NavLink>
           </li> : (" ")
              
              
            )}
       
        
        
        </>
    
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">House Hunter</a>
    {/* <a className="btn btn-ghost text-xl text-gray-800"> {users.name} </a> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  {user.role && <> 
  <div className="navbar-end">
     <button className="btn" onClick={handleLogout}> Logout </button>
  </div></>}
</div>
        </div>
    );
};

export default Navbar;