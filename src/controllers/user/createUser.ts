import { createUser } from "../../services/userService.ts";

export default async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  console.log("sasasas",!request.hasBody)
  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid user data" };
    return;
  }
console.log(request.body(), "ddddddd")
  const {
    value: { Username,PasswordHash,PasswordSalt, Gender, DateOfBirth,KnownAs,Created,
      LastActive,Introduction,LookingFor, Interests,City ,Country },
  } = await request.body();
  console.log("----------------",Username)
  if (!Username || !PasswordHash || !PasswordSalt || !Gender || !DateOfBirth || !KnownAs || !Created || !LastActive ||
    !Introduction || !LookingFor || !Interests || !City || !Country) {
    response.status = 422;
    response.body = {
      message: "Bad request!",
    };
    return;
  }

  const user = await createUser({Username,PasswordHash,PasswordSalt, Gender, DateOfBirth,KnownAs,Created,
    LastActive,Introduction,LookingFor, Interests,City ,Country  });

  response.body = {
    message: "User created",
    data: user
  };
};
