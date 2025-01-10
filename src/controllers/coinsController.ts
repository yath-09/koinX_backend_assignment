import { Request, Response } from "express";
import { getDb } from "../db/config";
import { Db } from "mongodb";

export const addCoins = async (req: Request, res: Response) => {
    try {
      const db: Db = getDb();
      const coins = await db.collection("Crypto").insertMany([
        {
          coin_name: "BITCOIN",
          coin_id: "bitcoin",
        },
        {
          coin_name: "ETHEREUM",
          coin_id: "ethereum",
        },
        {
          coin_name: "MATICNETWORK",
          coin_id: "matic-network",
        },
      ]);
      res.status(201).json({ message: "Coins added successfully", coins });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
      return;
    }
  };

export const getDeviatons = async (req: Request,res: Response) => {
    res.status(200).json({ message: "getDeviations" });
};

// export const getStats= async (req: Request, res: Response) => {
//     try {
//       const { coin } = req.query;
  
//       if (!coin || typeof coin !== "string") {
//         return res.status(400).json({ error: "Query parameter 'coin' is required and must be a string" });
//       }
  
//       // Find the latest data for the specified coin
//       const latestData = await Crypto.findOne({ coinId: coin })
//         .sort({ timestamp: -1 }) // Sort by timestamp in descending order to get the latest
//         .exec();
  
//       if (!latestData) {
//         return res.status(404).json({ error: `No data found for the coin '${coin}'` });
//       }
  
//       // Return the required data
//       res.status(200).json({
//         price: latestData.currentPrice,
//         marketCap: latestData.marketCap,
//         "24hChange": latestData.change24h,
//       });
//     } catch (error:any) {
//       console.error("Error fetching stats:", error.message);
//       res.status(500).json({ error: "Internal server error" });
//     }
//   };