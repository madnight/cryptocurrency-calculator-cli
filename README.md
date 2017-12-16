# cryptocurrency-calculator-cli
[![npm](https://img.shields.io/npm/v/cryptocurrency-calculator-cli.svg)](https://npmjs.com/package/cryptocurrency-calculator-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/madnight/cryptocurrency-calculator-cli.svg?branch=master)](https://travis-ci.org/madnight/cryptocurrency-calculator-cli)
[![Issue Count](https://codeclimate.com/github/madnight/cryptocurrency-calculator-cli/badges/issue_count.svg?maxAge=2592000)](https://codeclimate.com/github/madnight/cryptocurrency-calculator-cli/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/madnight/cryptocurrency-calculator-cli/badge.svg)](https://snyk.io/test/github/madnight/cryptocurrency-calculator-cli)
[![dependencies Status](https://david-dm.org/madnight/cryptocurrency-calculator-cli/status.svg)](https://david-dm.org/madnight/cryptocurrency-calculator-cli)
[![bitHound Overall Score](https://www.bithound.io/github/madnight/cryptocurrency-calculator-cli/badges/score.svg)](https://www.bithound.io/github/madnight/cryptocurrency-calculator-cli)

Cryptocurrency Converter Calculator as command line util

## Requirements
* node 8.0 or higher (need fancy syntax features thats why 8+)
* npm or yarn

## Usage

```
# install
npm install cryptocurrency-calculator-cli -g

# run default (shows current btc price)
cryptocurrency-calculator-cli

# run with options
cryptocurrency-calculator-cli --amount 0.5 --from BTC --to USD
```

## Options

```
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

```
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
