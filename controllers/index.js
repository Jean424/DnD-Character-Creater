//-- Import Express and create router to share existing express instance
const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const characterRoutes = require("./api/character_routes");
const userRoutes = require("./api/user-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/user", userRoutes);
router.use("/characters", characterRoutes);

//-- if gets here when rounting, throw 404
router.use((req, res) => {
  // console.log(`//-- Calling a ${req.method} in controllers/api/index.js`);
  res
    .status(404)
    .json({
      request: {
        method: req.method,
        params: req.params,
        body: req.body,
        path: "./",
      },
      response: {
        status: 404,
        message: "Rquest failure. Page not found.",
      },
    })
    .end();
});

//-- Returning route info to server.js in root.
module.exports = router;
