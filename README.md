# cryptocurrency-calculator-cli
[![npm](https://img.shields.io/npm/v/cryptocurrency-calculator-cli.svg)](https://npmjs.com/package/cryptocurrency-calculator-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/madnight/cryptocurrency-calculator-cli.svg?branch=master)](https://travis-ci.com/madnight/cryptocurrency-calculator-cli)

Cryptocurrency Converter Calculator as command line util

## Requirements
* node 8.0 or higher
* npm or yarn

## Usage

```bash
# install
npm install cryptocurrency-calculator-cli -g

# or run with npx
npx cryptocurrency-calculator-cli

# run default (shows current btc price)
cryptocurrency-calculator-cli

# run with options
cryptocurrency-calculator-cli --amount 0.5 --from BTC --to USD
```

## Options

```bash
cryptocurrency-calculator-cli --help

  Usage: cryptocurrency-calculator-cli [options]


  Options:

    -V, --version        output the version number
    -a, --amount <n>     number of coins
    -f, --from <string>  specify the coin to convert from e.g. ETH
    -t, --to <string>    specify the coin to convert to e.g. BTC
    -h, --help           output usage information
  ```

## Examples

```bash
cryptocurrency-calculator-cli --amount 0.5 --from BTC --to USD
9374.63 USD

cryptocurrency-calculator-cli -a 0.5 -f BTC -t USD
9359.95 USD

cryptocurrency-calculator-cli -f BTC -t USD
18722.87 USD

cryptocurrency-calculator-cli -f ETH -t USD
690.21 USD

cryptocurrency-calculator-cli -f ETH -t XRP
914.91 XRP

cryptocurrency-calculator-cli -a 0.01 -f BTC -t ADA
567.8592 ADA
  ```
