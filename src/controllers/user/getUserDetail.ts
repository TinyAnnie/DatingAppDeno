import { UserById } from "../../services/userService.ts";

export default async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { message: "Invalid book ID" };
    return;
  }

  const foundBook = await UserById(userId);

  if (!foundBook) {
    response.status = 404;
    response.body = { message: `User with ID ${userId} not found` };
    return;
  }

  response.body = foundBook;
};
