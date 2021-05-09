#!/usr/bin/env node

const param = require("commander");
const { version } = require("./package.json");
const { first } = require("lodash/fp");
const axios = require("axios");
const print = (string) => process.stdout.write(string + "\n");

param
    .version(version)
    .option("-a, --amount <n>", "number of coins")
    .option("-f, --from <string>", "specify the coin to convert from e.g. ETH")
    .option("-t, --to <string>", "specify the coin to convert to e.g. BTC")
    .parse(process.argv);

const from = param.from ? param.from : "BTC";
const to = param.to ? param.to : "USD";

const api = `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`;

const main = async () => {
    const result = (await axios.get(api)).data;
    const val = first(Object.values(result));
    const currency = first(Object.keys(result));
    return print(val * (param.amount ? param.amount : 1) + " " + currency);
};

main();
