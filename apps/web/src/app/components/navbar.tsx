import { useState } from "react"
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1" onClick={showSidebar}>
        <a className="btn btn-ghost text-xl">aitaolao</a>
        <div className="navbar">
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}></nav> 
          <ul className="nav-menu-items" onClick={showSidebar}></ul>
            <li className="navbar-toggle">
            </li>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="avatar btn btn-circle btn-ghost"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.pinimg.com/474x/a3/15/6f/a3156f0f78eabcb76cf0c483a7dc3d31.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
