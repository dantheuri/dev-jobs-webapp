const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/jobs", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jobicy.com/api/v2/remote-jobs"
    );
    const jobs = response.data.jobs;

    console.log("Jobs available", response); 

    res.json(jobs);
  } catch (error) {
    console.log("Error fetching jobs from Arbeitnow", error.message);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});
