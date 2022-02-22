import tw, { css } from 'twin.macro';
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-scroll'



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

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
        <Link  to="tokenomics" spy={true} smooth={true}>
        <a css={tw`cursor-pointer`}>Tokenomics</a>
          </Link>
        </li>
        <li>
          <Link to="roadmap">
          <a css={tw`cursor-pointer`}>Roadmap</a>
          </Link>
        </li>
        <li>
        <a href="https://app.gongswap.finance">Swap</a>
         
        </li>
        <li>
          <Link to="/#">
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
      </BrowserRouter>
    </div>
  );
}
