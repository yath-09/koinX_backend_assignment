import cron from "node-cron";
import { fetchCryptoData } from "../services/fetchCryptoData";


export const startCryptoJob = () => {
  cron.schedule("0 */2 * * *", async () => {
    try {
      console.log("Running crypto job...");
      const cryptoData = await fetchCryptoData();

      // Store data in the database
      for (const data of cryptoData) {
        await Crypto.create({
          coinId: data.coinId,
          name: data.name,
          currentPrice: data.currentPrice,
          marketCap: data.marketCap,
          change24h: data.change24h,
        });
      }

      console.log("Crypto data updated successfully!");
    } catch (error) {
      console.error("Error running crypto job:", error);
    }
  });

  console.log("Crypto job scheduled to run every 2 hours.");
};
