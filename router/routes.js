// Dependencies
const express = require("express");
const {
  register,
  login,
  createDatabase,
  createCollection,
  deleteDatabase,
  deleteCollection,
} = require("../controllers/controllers");
// router

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/database/:id").post(createDatabase);
router.route("/collection/:id").post(createCollection);
router.route("/database/:id").delete(deleteDatabase);
router.route("/collection/:id").delete(deleteCollection);
module.exports = router;
