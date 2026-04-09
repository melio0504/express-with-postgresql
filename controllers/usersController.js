const db = require("../db/queries");

async function usersListGet(req, res, next) {
  const search = req.query.search?.trim() || "";

  try {
    const users = await db.getAllUsernames(search);
    res.render("index", { title: "User List", users, search });
  } catch (error) {
    next(error);
  }
}

async function usersCreateGet(req, res) {
  res.render("createUser", { title: "Create User" });
}

async function usersCreatePost(req, res, next) {
  const username = req.body.username?.trim();

  if (!username) {
    return res.status(400).render("createUser", {
      title: "Create User",
      errors: [{ msg: "Username is required" }],
    });
  }

  try {
    await db.insertUsername(username);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

async function usersDeleteAllGet(req, res, next) {
  try {
    await db.deleteAllUsernames();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersDeleteAllGet,
};

