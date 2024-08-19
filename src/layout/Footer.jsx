function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Genre Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Genre</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Action
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Comedy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Drama
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Horror
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Sci-Fi
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">&copy; 2024 YourCompany. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
