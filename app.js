const express = require("express");
const cors = require("cors");
const setupContactRoutes = require("./app/routes/rho.routes");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(req, res) => {
    res.json({message: "wellcome to Rho"})
    
    setupContactRoutes(app);
});

module.exports = app;