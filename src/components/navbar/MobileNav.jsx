import tw, { css } from 'twin.macro';
import {  BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import {Link} from 'react-scroll'

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
          <span css={tw`text-sm font-bold`}>GONGSWAP</span>
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
          css={tw`absolute left-0 z-10 flex-col w-full h-screen py-20 space-y-8 text-yellow-600 list-none top-36`}
        >
          <li>
            <Link to="/">
              <a css={tw`cursor-pointer`}>Home</a>
            </Link>
          </li>
          <li>
            <Link to="tokenomics">
              <a>Tokenomics</a>
            </Link>
          </li>
          <li>
            <Link to="roadmap">
              <a>Roadmap</a>
            </Link>
          </li>
          <li>
          <a href="https://app.gongswap.finance/">Swap</a>
          </li>
          <li>
            <Link to="/">
              <a>NFTs</a>
            </Link>
          </li>
          <li>
          <a href="https://presale.gongswap.finance">IDO</a>
          </li>
          <li>
            <Link to="/">
              <a>
                <button
                  css={tw`px-3 py-2 text-white bg-yellow-600 border-0 rounded cursor-pointer hover:bg-yellow-500`}
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
