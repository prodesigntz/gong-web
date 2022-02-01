import tw, { css } from 'twin.macro';
import {Link, BrowserRouter} from 'react-router-dom';

import { Tab } from '..';
import { MainComponent, Hero } from './Main.styled.components';

export default function Main() {
  return (

    <BrowserRouter>
      <MainComponent variant="large">
        {/* Large Hero */}
        <Hero variant="large">
          <h1 css={tw`text-white text-4xl mb-4`}>
            Limitless Exchange On the Go
          </h1>
          <h2 css={tw`text-gray-200 text-lg font-light`}>
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
              css={tw`text-white bg-yellow-600 py-2 px-3 rounded cursor-pointer hover:bg-yellow-500 border-0`}
            >
              <Link to="/">
                <a>Claim Airdrop</a>
              </Link>
            </button>
            <button
              css={tw`py-2 px-3 rounded cursor-pointer border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="/">
                <a>Join Pre-sale</a>
              </Link>
            </button>
            <button
              css={tw`py-2 px-3 rounded cursor-pointer border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="/">
                <a>Roadmap</a>
              </Link>
            </button>
          </div>
        </Hero>
        <Tab />
      </MainComponent>
      {/* Mobile Hero */}
      <MainComponent>
        <Hero>
          <h1 css={tw`text-white text-4xl mb-4`}>
            Limitless Exchange On the Go
          </h1>
          <h2 css={tw`text-gray-200 text-lg font-light`}>
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
              css={tw`text-white bg-yellow-600 py-2 px-3 rounded cursor-pointer hover:bg-yellow-500 border-0`}
            >
              <Link to="/">
                <a>Claim Airdrop</a>
              </Link>
            </button>
            <button
              css={tw`py-2 px-3 rounded cursor-pointer border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="/">
                <a>Join Pre-sale</a>
              </Link>
            </button>
            <button
              css={tw`py-2 px-3 rounded cursor-pointer border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-500 hover:text-white`}
            >
              <Link to="/">
                <a>Roadmap</a>
              </Link>
            </button>
          </div>
        </Hero>
        <Tab />
      </MainComponent>
      </BrowserRouter>

  );
}
