import express from "express";
const router = express.Router();

router.post(
  "/user",
  express.json(),
  errorHandler(async (req, res, next) => {
    const { username, email } = req.body;
    const user = new UserModel({ username, email });
    const data = await user.save();
    res.send(data);
  })
);

export default router;
