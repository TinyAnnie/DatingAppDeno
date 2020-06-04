import { Router } from "https://deno.land/x/oak/mod.ts";

import getAllUsers from "../controllers/user/getAllUsers.ts";
import getUserDetails from "../controllers/user/getUserDetail.ts";
import createUser from "../controllers/user/createUser.ts";

import createBook from "../controllers/createBook.ts";
import updateBook from "../controllers/updateBook.ts";
import deleteBook from "../controllers/deleteBook.ts";

const router = new Router();

router
  .get("/api/users", getAllUsers)
  .get("/api/user/:id", getUserDetails)
  .post("/api/user", createUser)
  .put("/api/books/:id", updateBook)
  .delete("/api/books/:id", deleteBook);

router.get("/", (context) => {
  context.response.body = "Hello Api Deno!";
});

export default router;
