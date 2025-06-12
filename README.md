# 🔁 Uniswap V3 Single and Multi-hop Swap Contract

This Solidity smart contract demonstrates how to interact with [Uniswap V3](https://uniswap.org/) to perform **single-hop** and **multi-hop** token swaps using the `ISwapRouter` interface.

It includes examples of:

- Swapping a fixed amount of input tokens for the maximum output (Exact Input)
- Swapping the minimum amount of input tokens to receive a fixed amount of output (Exact Output)
- Performing both single-hop and multi-hop swaps using WETH, DAI, and USDC

---

## 🧠 Key Concepts

- **Single-hop Swap**: Directly swaps between two tokens via a single liquidity pool.
- **Multi-hop Swap**: Swaps between two tokens through one or more intermediary tokens/pools.

---

## 📦 Features

### ✅ Single-Hop Swaps

- `swapExactInputSingle(uint amountIn)`
  - Swaps a fixed amount of WETH for as much DAI as possible.
  
- `swapExactOutputSingle(uint amountOut, uint amountInMaximum)`
  - Swaps the minimum required WETH to get an exact amount of DAI.

### 🔀 Multi-Hop Swaps (WETH → USDC → DAI)

- `swapExactInputMultihop(uint amountIn)`
  - Swaps a fixed amount of WETH for maximum DAI via USDC.
  
- `swapExactOutputMultihop(uint amountOut, uint amountInMaximum)`
  - Swaps the minimum amount of WETH to receive an exact amount of DAI via USDC.
