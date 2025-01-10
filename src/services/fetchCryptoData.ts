import axios from "axios";

const COINGECKO_API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const COINS = ["bitcoin", "matic-network", "ethereum"];

export const fetchCryptoData = async () => {
  try {
    const response = await axios.get(COINGECKO_API_URL, {
      params: {
        vs_currency: "usd",
        ids: COINS.join(","),
      },
    });

    return response.data.map((coin: any) => ({
      coinId: coin.id,
      name: coin.name,
      currentPrice: coin.current_price,
      marketCap: coin.market_cap,
      change24h: coin.price_change_percentage_24h,
    }));
  } catch (error:any) {
    console.error("Error fetching data from CoinGecko:", error.message);
    throw error;
  }
};
