const pool = require("./pool");

async function getAllUsernames(search = "") {
  const normalizedSearch = search.trim();

  if (!normalizedSearch) {
    const { rows } = await pool.query("SELECT * FROM usernames ORDER BY id ASC");
    return rows;
  }

  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE '%' || $1 || '%' ORDER BY id ASC",
    [normalizedSearch]
  );
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  deleteAllUsernames,
};
