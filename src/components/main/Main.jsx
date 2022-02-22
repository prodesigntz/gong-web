import tw, { css } from 'twin.macro';
import { BrowserRouter} from 'react-router-dom';
import {Link} from 'react-scroll'

import { Tab } from '..';
import { MainComponent, Hero } from './Main.styled.components';

export default function Main() {
  return (

    <BrowserRouter>
      <MainComponent variant="large">
        {/* Large Hero */}
        <Hero variant="large">
          <h1 css={tw`mb-4 text-4xl text-white`}>
            Limitless Exchange On the Go
          </h1>
          <h2 css={tw`text-lg font-light text-gray-200`}>
            Experience full freedom through a public decentralized blockchain
            exchange{' '}
          </h2>
          <p
            css={css`
              color: #365a67;
              font-size: 1rem;
            `}
          >
            No Extra Fees, No BS, just Swap
          </p>
          <div css={tw`flex space-x-4`}>
            <button
              css={tw`px-3 py-2 text-white bg-yellow-600 border-0 rounded cursor-pointer hover:bg-yellow-500`}
            >
              <Link to="/">
                <a>Claim Airdrop</a>
              </Link>
            </button>
            <button
              css={tw`px-3 py-2 text-yellow-600 bg-transparent border-yellow-600 rounded cursor-pointer hover:bg-yellow-500 hover:text-white`}
            >
               <a href="https://presale.gongswap.finance">Join Pre-sale</a>
           
            </button>
            <button
              css={tw`px-3 py-2 text-yellow-600 bg-transparent border-yellow-600 rounded cursor-pointer hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="roadmap">
                <a>Roadmap</a>
              </Link>
            </button>
          </div>
        </Hero>
        {/* <Tab /> */}
      </MainComponent>
      {/* Mobile Hero */}
      <MainComponent>
        <Hero>
          <h1 css={tw`mb-4 text-4xl text-white`}>
            Limitless Exchange On the Go
          </h1>
          <h2 css={tw`text-lg font-light text-gray-200`}>
            Experience full freedom through a public centralized blockchain
            exchange{' '}
          </h2>
          <p
            css={css`
              color: #365a67;
              font-size: 1rem;
            `}
          >
            No Extra Fees, No BS, just Swap
          </p>
          <div css={tw`flex space-x-4`}>
            <button
              css={tw`px-3 py-2 text-white bg-yellow-600 border-0 rounded cursor-pointer hover:bg-yellow-500`}
            >
              <Link to="/">
                <a>Claim Airdrop</a>
              </Link>
            </button>
            <button
              css={tw`px-3 py-2 text-yellow-600 bg-transparent border-yellow-600 rounded cursor-pointer hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="/">
                <a>Join Pre-sale</a>
              </Link>
            </button>
            <button
              css={tw`px-3 py-2 text-yellow-600 bg-transparent border-yellow-600 rounded cursor-pointer hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="/">
                <a>Roadmap</a>
              </Link>
            </button>
          </div>
        </Hero>
        {/* <Tab /> */}
      </MainComponent>
      </BrowserRouter>

  );
}
