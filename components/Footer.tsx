const Footer = () => {
  return (
    <div className="flex flex-col items-center border-t-2 w-full bg-gray-50">
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold">
        TechTreasure
      </h1>
      <p className=" text-gray-600">
        Your one-stop shop for all mobile accessories
      </p>

      {/* <div className="flex space-x-8 mt-4 text-gray-600">
        <a href="/about" className="hover:text-gray-800">
          About Us
        </a>
        <a href="/contact" className="hover:text-gray-800">
          Contact Us
        </a>
        <a href="/privacy" className="hover:text-gray-800">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-gray-800">
          Terms of Service
        </a>
      </div> */}

      <p className=" text-gray-400">
        © 2024 TechTreasure. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
