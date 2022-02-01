import {  BrowserRouter, Link } from 'react-router-dom';
import tw, { css } from 'twin.macro';

export default function Showcase() {
  return (
    <BrowserRouter>
    <div css={tw`mt-20 md:mt-32`}>
      <h3 css={tw`font-mono text-2xl text-gray-500`}>GONG Swap Ecosystem.</h3>
      <div
        css={tw`flex-col space-y-6  md:space-x-4 md:space-y-0 md:flex md:flex-row md:justify-between`}
        id="showcase"
      >
        <div
          className="feature-box"
          css={tw`flex-col justify-end p-6 text-right text-gray-200 border-2 rounded shadow-xl md:w-4/12`}
        >
          <h3 css={tw`text-xl `}>SWAP</h3>
          <div css={tw`font-light text-right list-none`}>
            <p css={tw`text-justify h-28`}>
              Swap your favorite tokens,right on our onboard swap feature.
            </p>
          </div>
       
            <a  href="https://app.gongswap.finance/" css={tw`text-yellow-600 cursor-pointer`}>Swap {`>`} </a>
      
        </div>
        <div
          className="feature-box"
          css={tw`flex-col justify-end p-6 text-right text-gray-200 border-2 rounded shadow-xl md:w-4/12`}
        >
          <h3 css={tw`text-xl `}>NFT</h3>
          <div css={tw`font-light text-right list-none`}>
            <p css={tw`text-justify h-28`}>
              We are proud to provide cross-blockchain support, starting with a
              gas-free marketplace on the BSC Smartchain Network.
            </p>
          </div>
          <Link to="/">
            <a css={tw`text-yellow-600 cursor-pointer`}>Coming Soon {`>`} </a>
          </Link>
        </div>
        <div
          className="feature-box"
          css={tw`flex-col justify-end p-6 text-right text-gray-200 border-2 rounded shadow-xl md:w-4/12`}
        >
          <h3 css={tw`text-xl `}>IDO</h3>
          <div css={tw`font-light text-right list-none`}>
            <p css={tw`text-justify h-28`}>
              Our token project utilizes full potential of IDO, of which
              Individual investors fund projects issuing IDOs in the same way
              traditional firms acquire venture capital before launching.
            </p>
          </div>
          <Link to="/">
            <a css={tw`text-yellow-600 cursor-pointer`}>
              Learn more {`>`}{' '}
            </a>
          </Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
