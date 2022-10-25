import express from "express";
const router = express.Router();

router.post("/message", express.json(), (req, res, next) => {
  res.send(JSON.stringify(req.body));
});

export default router;
