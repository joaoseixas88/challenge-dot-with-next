import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

interface Result {
  id: number;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
	const api_key = process.env.API_KEY;
	const { search } = req.query;
	const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=pt-BR&query=${search}&page=1&include_adult=false`
  );
	const results = response.data.results

	function randomPrice(){
		const number = Math.random() * 100
		const fixed = number.toFixed(2)
		return fixed
	}

	const formattedData = results.map((item: Result) => {
    return {
      id: item.id,
      poster_path: `https://image.tmdb.org/t/p/w185${item.poster_path}`,
      release_date: item.release_date,
      title: item.title,
      vote_average: item.vote_average,
      price: randomPrice()
    };
  });
	

	return res.status(200).json(formattedData);
}



