import { rest } from "msw";
import mockMovie from "./__mocks__/mockMovie";

const SERVER = "https://api.themoviedb.org/3";

export const handlers = [
  rest.get(`${SERVER}/movie/238`, (_req, res, ctx) => res(ctx.json(mockMovie))),
  rest.post(`${SERVER}/order`, (_req, res, ctx) =>
    res(ctx.json({ orderNumber: 123455676 })),
  ),
];
