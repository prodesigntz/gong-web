import tw, { css } from 'twin.macro';

export default function Features() {
  return (
    <div css={tw`mt-20 md:mt-32`} id="features">
      <h3 css={tw`text-gray-500 font-mono text-2xl`}>Public Owned.</h3>
      {/* For Large Screen */}
      <div css={tw`hidden md:flex justify-between`}>
        <div css={tw`flex flex-col align-middle text-center w-1/6 space-y-2`}>
          <img
            src="/images/reward.svg"
            height={46}
            width={46}
            alt="auto-reward"
          />
          <h4 css={tw`text-yellow-600`}>Auto Reward</h4>
          <p css={tw`text-gray-400 text-sm`}>
            Be rewarded as you hold GONG token.
          </p>
        </div>
        <div css={tw`flex flex-col align-middle text-center w-1/6 space-y-2`}>
          <img
            src="/images/buyback.svg"
            height={46}
            width={46}
            alt="auto-buyback"
          />
          <h4 css={tw`text-yellow-600`}>Auto Buy-Back</h4>
          <p css={tw`text-gray-400 text-sm`}>
            Transfer of value to the community by automating Buy Backs.
          </p>
        </div>
        <div css={tw`flex flex-col align-middle text-center w-1/6 space-y-2`}>
          <img
            src="/images/auto-burn.svg"
            height={46}
            width={46}
            alt="auto-burn"
          />
          <h4 css={tw`text-yellow-600`}>Auto Burn</h4>
          <p css={tw`text-gray-400 text-sm`}>
            As a way to boost stability and growth of token value.
          </p>
        </div>
        <div css={tw`flex flex-col align-middle text-center w-1/6 space-y-2`}>
          <img
            src="/images/dev.svg"
            height={46}
            width={46}
            alt="dev collection"
          />
          <h4 css={tw`text-yellow-600`}>Dev Collection</h4>
          <p css={tw`text-gray-400 text-sm`}>
            Let’s keep the project going and reliably.
          </p>
        </div>
      </div>
      {/* For Small Screen */}
      <div css={tw`flex flex-col space-y-8 md:hidden`}>
        <div css={tw`flex justify-between`}>
          <div css={tw`flex flex-col align-middle text-center w-2/6 space-y-2`}>
            <img
              src="/images/reward.svg"
              height={46}
              width={46}
              alt="auto-reward"
            />
            <h4 css={tw`text-yellow-600`}>Auto Reward</h4>
            <p css={tw`text-gray-400 text-xs`}>
              Be rewarded as you hold GONG token.
            </p>
          </div>
          <div css={tw`flex flex-col align-middle text-center w-2/6 space-y-2`}>
            <img
              src="/images/buyback.svg"
              height={46}
              width={46}
              alt="auto-buyback"
            />
            <h4 css={tw`text-yellow-600`}>Auto Buy-Back</h4>
            <p css={tw`text-gray-400 text-xs`}>
              Transfer of value to the community by automating Buy Backs.
            </p>
          </div>
        </div>
        <div css={tw`flex justify-between`}>
          <div css={tw`flex flex-col align-middle text-center w-2/6 space-y-2`}>
            <img
              src="/images/auto-burn.svg"
              height={46}
              width={46}
              alt="auto-burn"
            />
            <h4 css={tw`text-yellow-600`}>Auto Burn</h4>
            <p css={tw`text-gray-400 text-xs`}>
              As a way to boost stability and growth of token value.
            </p>
          </div>
          <div css={tw`flex flex-col align-middle text-center w-2/6 space-y-2`}>
            <img
              src="/images/dev.svg"
              height={46}
              width={46}
              alt="dev collection"
            />
            <h4 css={tw`text-yellow-600`}>Dev Collection</h4>
            <p css={tw`text-gray-400 text-xs`}>
              Let’s keep the project going and reliably.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
