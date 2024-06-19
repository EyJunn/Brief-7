import React from 'react'
import PromoCodeModal from '../Modals/PromoCodeModal'
import CreateCyrptoModal from '../Modals/CreateCryptoModal'


const Header = () => {
  const role = window.localStorage.getItem("role")


  return (

    <header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
      <div className="container mx-auto flex items-center h-24">

        {role === "admin" && (<PromoCodeModal />)}
        
        {role === "admin" && (<CreateCyrptoModal />)}

        <nav className="contents font-semibold text-base lg:text-lg">
          <ul className="mx-auto flex items-center">
            <li className="p-5 xl:p-8 active">
              <a href="/Home">
                <span>Home</span>
              </a>
            </li>

            <li className="p-5 xl:p-8">
              <a href="/Home/Profile">
                <span>Profile</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="/Home/Crypto">
                <span>Buy Crypto</span>
              </a>
            </li>
            <li className="p-5 xl:p-8">
              <a href="/Home/Offer">
                <span>Offer</span>
              </a>
            </li>
          </ul>
        </nav>
        <button className="border border-white rounded-full font-bold px-8 py-2" onClick={() => {
          window.localStorage.clear();
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }}>Log out</button>
      </div>
    </header>
  )
}

export default Header