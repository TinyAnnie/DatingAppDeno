import { UserAll } from "../../services/userService.ts";

export default async ({ response }: { response: any }) => {
  response.body = await UserAll();
};
