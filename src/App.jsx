
import tw, { css } from 'twin.macro';
import {
  Campaign,
  Features,
  Main,
  Navbar,
  Roadmap,
  Showcase,
  Tokenomics,
  Footer,
  Socials,
  Platforms,

} from './components';
import { Layout } from './components';
import { useState } from 'react'

import 'tailwindcss/tailwind.css';
import './styles/globals.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    
<Layout>
          <div>
      <div key={'index'}>
        <title>One Stop BSC Swap | Top Token Rates and Fees | gongSwap</title>

        <meta
          name="description"
          content="One Stop BSC Swap | Top Token Rates and Fees | Exchange gongToken with other crypto assets instantaneously.| Experience full freedom through a public centralized blockchain exchange."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="One Stop BSC Swap | Top Token Rates and Fees | gongSwap"
        />
        <meta property="og:site_name" content="gongSwap" />
        <meta property="og:url" content="https://gongswap.finance" />
        <meta
          property="og:description"
          content="One Stop BSC Swap | Top Token Rates and Fees | Exchange gongToken with other crypto assets instantaneously.| Experience full freedom through a public decentralized blockchain exchange"
        />
        <meta
          name="google-site-verification"
          content="l8xd_SlrG3MnuGJ_QMXzfVmK-4VnJTCTH3wbmdPVP2k"
        />
        <meta name="yandex-verification" content="3bec31bb34c3b5e2" />
        <link rel="canonical" href="https://gongswap.finance" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon-180x180.png"
        />
      </div>

      <main css={tw`mx-auto w-5/6 lg:w-4/6`}>
        {/* Header Section */}
        <Navbar />
        {/* Main Section */}
        <Main />
        {/* Platforms */}
        <Platforms />
        {/* Social Links */}
        <Socials />
        {/* Features */}
        <Showcase />
        {/* Campaign */}
        <Campaign />
        {/* Features */}
        <Features />
        {/* Tokenomics */}
        <Tokenomics />
        {/* Roadmap */}
        <Roadmap />
        {/* Footer Section */}
        <Footer />
      </main>
    </div>
    
  
    </Layout>
  )
 
}

export default App
