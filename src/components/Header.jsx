import logo from '../assets/logo-footer.png'

const Header = ({presentCoin}) => {
    return (
        <div className='sticky top-0 z-50  bg-base-100'>
            <div className="w-[90%] mx-auto ">
            <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>                    
                </ul>
                </div>
                <div className='items-center flex text-center'>
                <img className='w-16 h-16  mx-auto' src={logo} alt="" />
                <span className="text-xl max-sm:hidden font-bold">BLP Eleven Squad</span>
                </div>
                
            </div>
            <div className="navbar-end gap-2 flex">
                <div className="max-md:hidden">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>      
                </ul>
                </div>                
                <a className="btn">{presentCoin} coin <img className="w-7 h-7" src="https://img.icons8.com/?size=100&id=sPBQkuep9vDA&format=png&color=000000" alt="" /></a>
                
            </div> 
                      
            </div>
        </div>
        </div>
        
    );
};

export default Header;