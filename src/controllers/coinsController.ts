import { Request, Response } from "express";

export const addCoins = async (req: Request, res: Response) => {
    res.status(200).json({ message: "getCoins" });
};

export const getDeviatons = async (req: Request,res: Response) => {
    res.status(200).json({ message: "getDeviations" });
};

export const getStats = async (req: Request,res: Response) => {
    res.status(200).json({ message: "getStats" });
};