import {Link, BrowserRouter} from 'react-router-dom';

import tw, { css } from 'twin.macro';
import { MainWavesSmall, MainWavesLarge } from './Footer.styled.components';
export default function Footer() {
  return (
    <BrowserRouter>
    <div css={tw`pb-8 mt-20 md:mt-32`}>
      {/* Footer Large */}
      <div css={tw`hidden md:flex justify-between align-middle`}>
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
        <div css={tw`text-gray-500 flex space-x-2 `}>
          <img
            src="/images/copyright.svg"
            alt="gongSwap copyright"
            width={14}
            height={14}
          />{' '}
          <span css={tw`my-auto`}> gongSwap, All rights reserved.</span>
        </div>
      </div>
      {/* Footer Small */}
      <div css={tw`flex md:hidden justify-between align-middle`}>
        <Link to="/">
          <a css={tw`flex items-center text-yellow-600 cursor-pointer`}>
            <img
              src="/images/logo.png"
              alt="gongSwap logo"
              width={20}
              height={20}
            />
            <span css={tw`font-bold text-sm`}>GONGSWAP</span>
          </a>
        </Link>
        <div css={tw`text-gray-500 flex space-x-2 `}>
          <img
            src="/images/copyright.svg"
            alt="gongSwap copyright"
            width={12}
            height={12}
          />{' '}
          <span css={tw`my-auto text-xs`}> gongSwap, All rights reserved.</span>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}
