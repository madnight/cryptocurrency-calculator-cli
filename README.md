# cryptocurrency-calculator-cli
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
