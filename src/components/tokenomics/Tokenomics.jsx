import tw, { css } from 'twin.macro';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const address = '0x282362dcd3df51a68c13a6402446c39ec63c350e';

  return (
    <div css={tw`mt-20 md:mt-32`} id="tokenomics">
      <h3 css={tw`font-mono text-2xl text-gray-500`}>Tokenomics.</h3>
      {/* Contract address */}
      <div css={tw`flex flex-col justify-center mx-auto text-center`}>
        <h4 css={tw`font-mono text-gray-400 md:text-sm`}>Contract Address</h4>
        <div css={tw`flex flex-col w-full mx-auto md:relative md:w-4/6`}>
          <input
            css={tw`relative w-full px-2 py-1 text-xs text-center text-yellow-600 border-0 rounded md:py-2 md:px-4 md:text-lg`}
            className="copy-body"
            type="text"
            value={address}
            readOnly
          />
          <button
            css={tw`block p-1 mt-2 text-gray-200 bg-yellow-600 border-0 rounded cursor-pointer md:mt-0 md:absolute md:right-2 md:top-1/4 active:bg-yellow-400 active:text-gray-600`}
            onClick={() => {
              navigator.clipboard.writeText(address);
              setCopied(true);
            }}
          >
            {copied ? 'copied' : 'copy'}
          </button>
        </div>
      </div>
      {/* Summary */}
      <div css={tw`mx-auto md:flex md:flex-col md:w-4/6`}>
        <div css={tw`justify-between text-gray-400 md:flex md:w-full`}>
          <h5 css={tw`font-mono`}>
            Name: <span css={tw`font-bold text-yellow-600`}>GONG</span>
          </h5>
          <h5 css={tw`font-mono`}>
            Symbol: <span css={tw`font-bold text-yellow-600`}>GONG</span>
          </h5>
        </div>
        <div css={tw`justify-between text-gray-400 md:flex md:w-full`}>
          <h5 css={tw`font-mono`}>
            Supply:{' '}
            <span css={tw`font-bold text-yellow-600`}>100,000,000,000</span>
          </h5>
          <h5 css={tw`font-mono`}>
            Decimal: <span css={tw`font-bold text-yellow-600`}>9</span>
          </h5>
        </div>
      </div>
      {/* Roadmap */}
      <div>
        <div
          className="roadmap-content"
          css={tw`w-full px-10 py-12 mx-auto mt-12 text-gray-300 rounded`}
        >
          {/* For large Screen */}
          <div css={tw`justify-between hidden align-middle md:flex`}>
            <div css={tw`w-3/6`}>
              <Pie
                data={data}
                options={{
                  title: {
                    display: false,
                    text: 'Average Rainfall per month',
                    fontSize: 20,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <ul css={tw`p-0 my-auto space-y-4 text-yellow-600 list-disc`}>
              <li>Development : 30%</li>
              <li>Airdrop : 2%</li>
              <li>Charity : 20%</li>
              <li>Pre Sale : 3%</li>
              <li>Burning : 20%</li>
              <li>Rewards : 5%</li>
              <li>Marketing : 20%</li>
            </ul>
          </div>
          {/* For Small Screen */}
          <div css={tw`flex flex-col space-y-10 md:hidden`}>
            <div css={tw`w-5/6 mx-auto`}>
              <Pie
                data={data}
                options={{
                  title: {
                    display: false,
                    text: 'Average Rainfall per month',
                    fontSize: 20,
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
            <ul css={tw`p-0 mx-auto space-y-4 text-yellow-600 list-disc`}>
              <li>Development : 30%</li>
              <li>Airdrop : 2%</li>
              <li>Charity : 20%</li>
              <li>Pre Sale : 3%</li>
              <li>Burning : 20%</li>
              <li>Rewards : 5%</li>
              <li>Marketing : 20%</li>
            </ul>
          </div>
        </div>
        {/* For Small Screen */}
      </div>
    </div>
  );
}

const data = {
  labels: [
    'Development',
    'Airdrop',
    'Charity',
    'Pre Sale',
    'Burning',
    'Rewards',
    'Marketing',
  ],
  datasets: [
    {
      label: 'Tokenomics',
      data: [30, 2, 20, 3, 20, 5, 20],
      backgroundColor: ['rgb(54, 90, 104)'],
      hoverOffset: 4,
    },
  ],
};
