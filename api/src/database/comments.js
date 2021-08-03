const comments = [
  {
    _id: 21240,
    id_car: 1,
    id_user: 1,
    comment: "reinvent compelling platforms",
  },
  {
    _id: 21036,
    id_car: 1,
    id_user: 2,
    comment: "incentivize collaborative initiatives",
  },
  {
    _id: 20847,
    id_car: 3,
    id_user: 3,
    comment: "envisioneer sticky experiences",
  },
  {
    _id: 22380,
    id_car: 4,
    id_user: 4,
    comment: "synthesize front-end convergence",
  },
  {
    _id: 21547,
    id_car: 5,
    id_user: 5,
    comment: "whiteboard real-time action-items",
  },
  {
    _id: 23853,
    id_car: 6,
    id_user: 6,
    comment: "streamline magnetic architectures",
  },
  {
    _id: 23379,
    id_car: 7,
    id_user: 7,
    comment: "deploy world-class networks",
  },
  {
    _id: 23017,
    id_car: 8,
    id_user: 8,
    comment: "disintermediate holistic e-markets",
  },
  {
    _id: 20243,
    id_car: 9,
    id_user: 9,
    comment: "reinvent sticky users",
  },
  {
    _id: 23212,
    id_car: 10,
    id_user: 10,
    comment: "matrix back-end action-items",
  },
];

async function getComments(id) {
  return await comments.filter((item) => item.id_car == id);
}

module.exports = {
  getComments,
};
