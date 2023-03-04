import type { NextApiRequest, NextApiResponse } from "next";

import { fetchWrapper } from "@utils";
import { Movies } from "@types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  const { page, search, option } = req.query;

  const endpoint = search
    ? `${process.env.NEXT_PUBLIC_API_URL}search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=${process.env.NEXT_PUBLIC_API_LANGUAGE}&query=${search}&page=${page}`
    : `${process.env.NEXT_PUBLIC_API_URL}movie/${option}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=${process.env.NEXT_PUBLIC_API_LANGUAGE}&page=${page}`;
  const data = await fetchWrapper<Movies>(endpoint);

  res.status(200).json(data);
}
