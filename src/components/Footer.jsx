import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo + Description */}
          <div>
            <img
              src={logo}
              alt="DevStack"
              className="w-32 mb-4"
            />

            <p className="text-gray-500 text-sm leading-6">
              Build and manage your perfect development stack with modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-500">
              <li>
                <a className="hover:text-primary cursor-pointer">
                  Home
                </a>
              </li>

              <li>
                <a className="hover:text-primary cursor-pointer">
                  Technologies
                </a>
              </li>

              <li>
                <a className="hover:text-primary cursor-pointer">
                  My Stack
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Resources
            </h3>

            <ul className="space-y-2 text-gray-500">
              <li>
                <a className="hover:text-primary cursor-pointer">
                  Documentation
                </a>
              </li>

              <li>
                <a className="hover:text-primary cursor-pointer">
                  Community
                </a>
              </li>

              <li>
                <a className="hover:text-primary cursor-pointer">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Account
            </h3>

            <ul className="space-y-2 text-gray-500">
              <li>
                <a className="hover:text-primary cursor-pointer">
                  Sign In
                </a>
              </li>

              <li>
                <a className="hover:text-primary cursor-pointer">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-base-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <p>
            © 2026 DevStack. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="hover:text-primary cursor-pointer">
              Privacy Policy
            </a>

            <a className="hover:text-primary cursor-pointer">
              Terms of Service
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;