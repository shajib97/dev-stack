import logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 px-4 md:px-8 sticky top-0 z-50">
      
      <div className="navbar-start">
        <img
          src={logo}
          alt="DevStack"
          className="w-32 md:w-40"
        />
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a href="#home" className="text-pink-500 font-medium">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#my-stack">My Stack</a></li>
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="navbar-end hidden md:flex gap-2">
        <button className="btn btn-ghost">Sign In</button>
        <button className="btn brand-gradient-bg border-0 text-white rounded-full px-6">Sign Up</button>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>My Stack</a></li>
            <li><a>Sign In</a></li>
            <li><a>Sign Up</a></li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;