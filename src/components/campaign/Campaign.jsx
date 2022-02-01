import tw, { css } from 'twin.macro';
import { Link, BrowserRouter }from 'react-router-dom';

export default function Campaign() {
  return (
    <div css={tw`mt-20 md:mt-32`} id="campaign">
      {/* Airdrop Campaign */}
      <BrowserRouter>
      <Link to="/">
        <a>
          <img
            src="/images/airdrop.svg"
            width={895}
            height={73}
            alt="gongswap airdrop"
          />
        </a>
      </Link>
      </BrowserRouter>
    </div>
  );
}
