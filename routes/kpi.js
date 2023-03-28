import express from "express";

const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    // const kpis = await KPI.find();
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
});

export default router;
