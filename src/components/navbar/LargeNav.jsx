import tw, { css } from 'twin.macro';
import { BrowserRouter, Link } from 'react-router-dom';


export default function LargeNav() {
  return (
    <div css={tw`z-50 justify-between hidden md:flex`}>
        <BrowserRouter>
      <Link to="/">
        <a css={tw`flex items-center text-yellow-600 cursor-pointer`}>
          <img
            src="/images/logo.png"
            alt="gongSwap logo"
            width={40}
            height={40}
          />
          <span css={tw`font-bold`}>GONGSWAP</span>
        </a>
      </Link>
      <ul css={tw`flex space-x-8 text-yellow-600 list-none`}>
        <li css={tw`cursor-pointer`}>
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
        <a href="https://app.gongswap.finance/">Swap</a>
         
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
                css={tw`px-3 py-2 text-white bg-yellow-600 border-0 rounded cursor-pointer hover:bg-yellow-500`}
              >
                Join Airdrop
              </button>
            </a>
          </Link>
        </li>
      </ul>
      </BrowserRouter>
    </div>
  );
}
