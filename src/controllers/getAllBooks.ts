import { BookAll } from "./../services/bookService.ts";

export default async ({ response }: { response: any }) => {
  response.body = await BookAll();
};
