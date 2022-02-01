import tw, { css } from 'twin.macro';
import {  BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';

export default function MobileNav() {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <div css={tw`flex justify-between md:hidden`}>
      <BrowserRouter>
      <Link to="/">
        <a css={tw`flex items-center text-yellow-600 cursor-pointer`}>
          <img
            src="/images/logo.png"
            alt="gongSwap logo"
            width={30}
            height={30}
          />
          <span css={tw`font-bold text-sm`}>GONGSWAP</span>
        </a>
      </Link>
      {!openedMenu && (
        <img
          src={'/images/open-menu.svg'}
          width={30}
          height={22}
          alt="open menu icon"
          onClick={() => setOpenedMenu(true)}
        />
      )}
      {openedMenu && (
        <img
          src={'/images/close-menu.svg'}
          width={30}
          height={22}
          alt="open menu icon"
          onClick={() => setOpenedMenu(false)}
        />
      )}
      {openedMenu && (
        <ul
          className="mobile-nav"
          css={tw`absolute top-36 left-0 flex-col list-none space-y-8 text-yellow-600 w-full h-screen py-20 z-10`}
        >
          <li>
            <Link to="/">
              <a css={tw`cursor-pointer`}>Home</a>
            </Link>
          </li>
          <li>
            <Link to="/#tokenomics">
              <a>Tokenomics</a>
            </Link>
          </li>
          <li>
            <Link to="/#roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>Swap</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>NFTs</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>IDO</a>
            </Link>
          </li>
          <li>
            <Link to="/">
              <a>
                <button
                  css={tw`text-white bg-yellow-600 py-2 px-3 rounded border-0 cursor-pointer hover:bg-yellow-500`}
                >
                  Join Airdrop
                </button>
              </a>
            </Link>
          </li>
        </ul>
      )}
      </BrowserRouter>
    </div>
  );
}
