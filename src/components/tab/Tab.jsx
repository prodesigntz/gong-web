import { useState } from 'react';

import { TabContainer, TextInput } from './Tab.styled.components';

export default function Tab() {
  const [swapTab, setSwapTab] = useState(true);
  return (
    <div>
      {/* Large Screen Tab */}
      <TabContainer variant="large">
        <div className="tab-header">
          <div
            className={swapTab ? 'tab-header--left active' : 'tab-header--left'}
            onClick={() => setSwapTab(true)}
          >
            Swap
          </div>
          <div
            className={
              !swapTab ? 'tab-header--right active' : 'tab-header--right'
            }
            onClick={() => setSwapTab(false)}
          >
            Buy
          </div>
        </div>
        {swapTab && (
          <div className="swap-body">
            <form>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">ETH</option>
                </select>
              </div>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">Select a Token</option>
                </select>
              </div>
              <button>connect to wallet</button>
            </form>
          </div>
        )}
        {!swapTab && (
          <div className="swap-body">
            <form>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">ETH</option>
                </select>
              </div>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">Select a Token</option>
                </select>
              </div>
              <button>Buy</button>
            </form>
          </div>
        )}
      </TabContainer>
      {/* Mobile Tab */}
      <TabContainer>
        <div className="tab-header">
          <div
            className={swapTab ? 'tab-header--left active' : 'tab-header--left'}
            onClick={() => setSwapTab(true)}
          >
            Swap
          </div>
          <div
            className={
              !swapTab ? 'tab-header--right active' : 'tab-header--right'
            }
            onClick={() => setSwapTab(false)}
          >
            Buy
          </div>
        </div>
        {swapTab && (
          <div className="swap-body">
            <form>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">ETH</option>
                </select>
              </div>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">Select a Token</option>
                </select>
              </div>
              <button>connect to wallet</button>
            </form>
          </div>
        )}
        {!swapTab && (
          <div className="swap-body">
            <form>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">ETH</option>
                </select>
              </div>
              <div className="input-field">
                <TextInput type="number" name="baseCoin" placeholder="0.0" />
                <select name="baseCoins" id="baseCoins">
                  <option value="eth">Select a Token</option>
                </select>
              </div>
              <button>Buy</button>
            </form>
          </div>
        )}
      </TabContainer>
    </div>
  );
}
