const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const characterRoutes = require("./api/character_routes");
const userRoutes = require("./api/user-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/user", userRoutes);
// router.use("/characters", characterRoutes);

module.exports = router;
