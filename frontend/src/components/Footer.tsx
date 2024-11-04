

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-semibold text-white">Medium Blog</h3>
            <p className="mt-2 text-sm">
              A place to share and discover ideas, stories, and knowledge.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex space-x-8">
            <ul>
              <li className="mb-2">
                <a href="#about" className="hover:text-indigo-400">About</a>
              </li>
              <li className="mb-2">
                <a href="#features" className="hover:text-indigo-400">Features</a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="hover:text-indigo-400">Pricing</a>
              </li>
            </ul>
            <ul>
              <li className="mb-2">
                <a href="#blog" className="hover:text-indigo-400">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#help" className="hover:text-indigo-400">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-indigo-400">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="https://facebook.com" className="hover:text-indigo-400" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="hover:text-indigo-400" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-indigo-400" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Medium-Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
