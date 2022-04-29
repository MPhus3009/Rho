const express = require("express");
const rhos = require("../controller/rho.controller");
module.exports = (app) => {
    const router = express.Router();
    router.get("/find",rhos.findAll)
}
