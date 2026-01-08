// import Post from "../models/post.model.js";

// const increaseVisit = async (req, res, next) => {
//   const slug = req.params.slug;

//   await Post.findOneAndUpdate({ slug }, { $inc: { visit: 1 } });

//   next();
// };

// export default increaseVisit;


import Post from "../models/post.model.js";

const increaseVisit = async (req, res, next) => {
  try {
    const { slug } = req.params;

    const post = await Post.findOneAndUpdate(
      { slug },
      { $inc: { visit: 1 } },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    next();
  } catch (error) {
    next(error); // global error handler руу явуулна
  }
};

export default increaseVisit;
