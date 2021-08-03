const users = [
  {
    _id: 13035,
    name: "Lelah",
  },
  {
    _id: 10020,
    name: "Riki",
  },
  {
    _id: 12482,
    name: "Lane",
  },
  {
    _id: 12803,
    name: "Goldina",
  },
  {
    _id: 10616,
    name: "Adorne",
  },
  {
    _id: 13095,
    name: "Glynis",
  },
  {
    _id: 11795,
    name: "Naomi",
  },
  {
    _id: 14872,
    name: "Ruprecht",
  },
  {
    _id: 12741,
    name: "Birdie",
  },
  {
    _id: 13980,
    name: "Torey",
  },
  {
    _id: 11379,
    name: "Zulema",
  },
  {
    _id: 14898,
    name: "Dorey",
  },
  {
    _id: 11098,
    name: "Fax",
  },
  {
    _id: 12842,
    name: "Ekaterina",
  },
  {
    _id: 14170,
    name: "Paule",
  },
  {
    _id: 11196,
    name: "Dulciana",
  },
  {
    _id: 11542,
    name: "Jeff",
  },
  {
    _id: 12232,
    name: "Leyla",
  },
  {
    _id: 14440,
    name: "Brynna",
  },
  {
    _id: 12437,
    name: "Roderich",
  },
];

async function getUser(name) {
  return await users.filter((item) => item.name == name);
}

module.exports = {
  getUser,
};
