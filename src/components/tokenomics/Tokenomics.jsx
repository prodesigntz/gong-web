import tw, { css } from 'twin.macro';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import { useState } from 'react';

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);
  const address = '0x282362dcd3df51a68c13a6402446c39ec63c350e';

  return (
    <div css={tw`mt-20 md:mt-32`} id="tokenomics">
      <h3 css={tw`text-gray-500 font-mono text-2xl`}>Tokenomics.</h3>
      {/* Contract address */}
      <div css={tw`mx-auto flex flex-col text-center justify-center`}>
        <h4 css={tw`text-gray-400 font-mono md:text-sm`}>Contract Address</h4>
        <div css={tw`flex flex-col md:relative w-full md:w-4/6 mx-auto`}>
          <input
            css={tw`py-1 md:py-2 px-2 md:px-4 text-xs md:text-lg w-full text-center rounded relative border-0 text-yellow-600`}
            className="copy-body"
            type="text"
            value={address}
            readOnly
          />
          <button
            css={tw`block mt-2 md:mt-0 md:absolute md:right-2 md:top-1/4 rounded border-0 p-1 bg-yellow-600 text-gray-200 cursor-pointer active:bg-yellow-400 active:text-gray-600`}
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
      <div css={tw`md:flex md:flex-col mx-auto md:w-4/6`}>
        <div css={tw`text-gray-400 md:flex md:w-full justify-between`}>
          <h5 css={tw`font-mono`}>
            Name: <span css={tw`text-yellow-600 font-bold`}>GONG</span>
          </h5>
          <h5 css={tw`font-mono`}>
            Symbol: <span css={tw`text-yellow-600 font-bold`}>GONG</span>
          </h5>
        </div>
        <div css={tw`text-gray-400 md:flex md:w-full justify-between`}>
          <h5 css={tw`font-mono`}>
            Supply:{' '}
            <span css={tw`text-yellow-600 font-bold`}>100,000,000,000</span>
          </h5>
          <h5 css={tw`font-mono`}>
            Decimal: <span css={tw`text-yellow-600 font-bold`}>9</span>
          </h5>
        </div>
      </div>
      {/* Roadmap */}
      <div>
        <div
          className="roadmap-content"
          css={tw`mt-12 w-full mx-auto py-12 px-10 rounded text-gray-300`}
        >
          {/* For large Screen */}
          <div css={tw`hidden md:flex justify-between align-middle`}>
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
            <ul css={tw`text-yellow-600 list-disc p-0 my-auto space-y-4`}>
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
          <div css={tw`flex flex-col md:hidden space-y-10`}>
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
            <ul css={tw`text-yellow-600 list-disc p-0 mx-auto space-y-4`}>
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
