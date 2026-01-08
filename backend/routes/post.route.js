import { requireAuth } from "@clerk/express";

import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  deletePost,
  uploadAuth,
  featurePost,
} from "../controllers/post.controller.js";
import increaseVisit from "../middlewares/increaseVisit.js";

const router = express.Router();

router.get("/upload-auth", uploadAuth);
router.get("/", getPosts);
router.get("/:slug", increaseVisit, getPost);
router.post("/", requireAuth(),createPost);

router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

export default router;
// import express from "express";
// import {
//   getPosts,
//   getPost,
//   createPost,
//   deletePost,
//   uploadAuth,
//   featurePost,
// } from "../controllers/post.controller.js";
// import increaseVisit from "../middlewares/increaseVisit.js";
// import { requireAuth } from "@clerk/express"; // ✅ import requireAuth

// const router = express.Router();

// router.get("/upload-auth", uploadAuth);

// router.get("/", getPosts);
// router.get("/:slug", increaseVisit, getPost);

// // ✅ POST route-д requireAuth() нэмэх
// router.post("/", requireAuth(), createPost);

// router.delete("/:id", deletePost);
// router.patch("/feature", featurePost);

// export default router;
