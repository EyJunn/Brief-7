import React from 'react'

const Header = () => {
  return (

<header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
  <div className="container mx-auto flex items-center h-24">
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center">
        <li className="p-5 xl:p-8 active">
          <a href="">
            <span>Home</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>My Crypto</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="/Home/Profile">
            <span>Profile</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span>Buy Crypto</span>
          </a>
        </li>
        <li className="p-5 xl:p-8">
          <a href="">
            <span></span>
          </a>
        </li>
      </ul>
    </nav>
    <button className="border border-white rounded-full font-bold px-8 py-2">Log out</button>
  </div>
</header>
  )
}

export default Header