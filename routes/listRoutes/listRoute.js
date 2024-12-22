import express from "express";

import {
  allComplete,
  deleteList,
  getTodoLists,
  postTodoLists,
  updateList,
  allUnComplete,
  clearComplete,
} from "../../controllers/todoLists.js";

import { getLink, setLink } from "../../controllers/posts.js";

const router = express.Router();

router.get("/", getTodoLists);

router.get("/allComplete", allComplete);

router.post("/", postTodoLists);

router.post("/update", updateList);

router.post("/delete", deleteList);

router.get("/allUnComplete", allUnComplete);

router.get("/clearComplete", clearComplete);

router.get("/link", getLink);

router.get("/link/set", setLink);

export default router;
