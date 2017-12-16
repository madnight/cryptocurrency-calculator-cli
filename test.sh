set -xe

node index.js
node index.js --amount 0.5 --from BTC --to USD
node index.js --amount 0.5 --from BTC --to BTC
node index.js -a 0.5 -f BTC -t BTC
node index.js --amount 0.1 --from BTC --to ADA
node index.js --amount 0.1 --from ETH --to USD
node index.js --amount 2 --from BTC --to ADA
node index.js --amount 2 --from IOT --to USD
node index.js --amount 2 --from XRP --to BTC
node index.js --amount 2 --from XRP
node index.js --amount 2 --to BTC
node index.js --amount 2
