import tw, { css } from 'twin.macro';
import { useState } from 'react';

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div css={tw`mt-20 md:mt-32`} id="roadmap">
      <h3 css={tw`text-gray-500 font-mono text-2xl`}>Roadmap.</h3>
      {/* For large Screen */}
      <div css={tw`hidden md:block`}>
        {/* Headers */}
        <ul css={tw`flex list-none justify-between text-gray-200`}>
          {ContentList.map((phase) => {
            return (
              <li
                className={
                  activePhase == phase.id ? 'beacon beacon__active' : 'beacon'
                }
                key={phase.id}
                css={phase.active ? tw`underline` : ``}
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.name}
              </li>
            );
          })}
        </ul>
        {/* Content */}
        <div
          className="roadmap-content"
          css={tw` w-full py-3 px-1 mt-10 rounded text-gray-300`}
        >
          <ol
            css={tw`list-disc flex flex-col space-y-5 text-sm text-yellow-600`}
          >
            {ContentList.filter((el) => el.id == activePhase)[0].content.map(
              (item) => {
                return (
                  <li
                    key={item.text}
                    className={item.completed ? 'stage--active' : ''}
                  >
                    {item.text}
                  </li>
                );
              }
            )}
          </ol>
        </div>
      </div>
      {/* For Mobile Screen */}
      <div css={tw`md:hidden flex`}>
        {/* Headers */}
        <ul
          css={tw`flex flex-col list-none justify-between text-gray-200 text-xs p-0 w-3/6`}
        >
          {ContentList.map((phase) => {
            return (
              <li
                className={
                  activePhase == phase.id
                    ? 'beacon-mobile beacon-mobile__active'
                    : 'beacon-mobile'
                }
                key={phase.id}
                css={phase.active ? tw`underline` : ``}
                onClick={() => setActivePhase(phase.id)}
              >
                {phase.name}
              </li>
            );
          })}
        </ul>
        {/* Content */}
        <div
          className="roadmap-content"
          css={tw` w-full px-1 rounded text-gray-300`}
        >
          <ol
            css={tw`list-disc flex flex-col space-y-5 text-sm text-yellow-600`}
          >
            {ContentList.filter((el) => el.id == activePhase)[0].content.map(
              (item) => {
                return <li key={item.text}>{item.text}</li>;
              }
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}

const ContentList = [
  {
    id: 0,
    name: 'Phase One',
    active: true,
    content: [
      { text: 'Token Creation', completed: true },
      { text: 'Ideation of Gongswap', completed: true },
      { text: 'Website Launching', completed: true },
      { text: 'Community Development', completed: false },
      { text: 'Project spread awareness', completed: false },
      { text: 'Swap Development Initiated', completed: false },
      { text: 'NFT Development', completed: false },
      { text: 'IDO Research', completed: false },
    ],
  },
  {
    id: 1,
    name: 'Phase Two',
    active: false,
    content: [
      { text: 'Airdrop Launching', completed: false },
      { text: '10k Social Media Target', completed: false },
      { text: 'Project Briefing', completed: false },
      { text: 'Intense Project Marketing', completed: false },
      { text: 'Swap Partnership Recruitment', completed: false },
      { text: 'CEX Listing Research', completed: false },
      { text: 'GONG Contract Auditing', completed: false },
    ],
  },
  {
    id: 2,
    name: 'Phase Three',
    active: false,
    content: [
      { text: '15k Social Media Target', completed: false },
      { text: 'PreSales Launching', completed: false },
      { text: 'Hotbit Listing', completed: false },
      { text: 'Gongswap DEX Launching', completed: false },
      { text: 'Coingecko Listing', completed: false },
      { text: 'Coinmarketcap Listing', completed: false },
      { text: 'Shilling Platforms Listing', completed: false },
      {
        text: 'NFT Minting Platform and Marketplace on Testnet',
        completed: false,
      },
      { text: 'Holders Contest Competitions', completed: false },
      { text: 'Burning Event', completed: false },
    ],
  },
  {
    id: 3,
    name: 'Phase Four',
    active: false,
    content: [
      { text: '30k Social Media Target', completed: false },
      { text: '10k Holders Target', completed: false },
      { text: 'NFT Marketplace Launching', completed: false },
      { text: 'GONG NFTs Launched', completed: false },
      { text: 'Website Redesign', completed: false },
      {
        text: 'IDO Development Initiated',
        completed: false,
      },
      {
        text: 'GongGames on Testnet',
        completed: false,
      },
      {
        text: 'Trading Competition',
        completed: false,
      },
      {
        text: 'NFT Trading on Gongswap',
        completed: false,
      },
      {
        text: 'Gongverse Research',
        completed: false,
      },
      {
        text: 'Gongswap DEX Contract Auditing',
        completed: false,
      },
    ],
  },
  {
    id: 4,
    name: 'Phase Five',
    active: false,
    content: [
      {
        text: 'Gongswap Games Launching',
        completed: false,
      },
      {
        text: 'Security Improvements',
        completed: false,
      },
      {
        text: 'Pancake Swap Liquidity addition',
        completed: false,
      },
      {
        text: 'Charity Platform Initiated',
        completed: false,
      },
      {
        text: 'More CEX Listing',
        completed: false,
      },
      {
        text: 'Gongverse Development Initiated',
        completed: false,
      },
      {
        text: 'GongGames on Testnet',
        completed: false,
      },
    ],
  },
  {
    id: 5,
    name: 'Phase Six',
    active: false,
    content: [
      {
        text: 'Intense Marketing',
        completed: false,
      },
    ],
  },
];
