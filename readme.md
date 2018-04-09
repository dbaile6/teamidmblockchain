

This CryptoCurrency Tracker was built utilizing AJAX requests and jQuery. It allows users to get a list of the top cryptocurrencies and add their own so they can track their total holdings in USD.

It utilizes the CryptoCompareAPI and the CoinCompareAPI in order to retrieve the latest cryptocurrency information in order to create an accurate portrayal of the users portrayal. It relies on four key functions.

1. dailyChangeAJAX utilizes AJAX requests in order to find out the % of daily change for each individual cryptocurrency
2. priceAJAX utilizes AJAX requests in order to find the current value of each CryptoCurrency
3. totalValue calculates the total value of a users holdings based on the current value of each cryptocurrency and the holdigns they input
4. dailyChangeValue calculates the daily change amount for a user given their current holdings.

It was created by Dylan Bailey, Itzik Shaoulian, and Moses Lee.

To Do:
Rewrite code to utilize React for more flexibility and responsiveness
Allow users to add their own personal cryptocurrencies to the list of CryptoCurrencies being tracked.

View the project at https://dbaile6.github.io/teamidmblockchain/
