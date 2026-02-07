import type { NextApiRequest, NextApiResponse } from "next";
import { mockCategories } from "./data";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(mockCategories);
  }
  return res.status(405).json({ message: "Method not allowed" });
}
