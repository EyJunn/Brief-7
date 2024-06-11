import React from 'react'

const Footer = () => {
  return (

<footer className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-24">
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <a href="">
            <span>About Us</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>Contact</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>© Copyright</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</footer>
  )
}

export default Footer