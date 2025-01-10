import mongoose, { Schema, Document, Model } from "mongoose";

// Interface for a cryptocurrency document
export interface ICrypto extends Document {
  coinId: string;
  name: string;
  currentPrice: number;
  marketCap: number;
  change24h: number;
  timestamp: Date;
}

// Define the schema
const CryptoSchema: Schema = new Schema({
  coinId: { type: String, required: true },
  name: { type: String, required: true },
  currentPrice: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  change24h: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Define the model type
const Crypto: Model<ICrypto> = mongoose.model<ICrypto>("Crypto", CryptoSchema);

export default Crypto;
