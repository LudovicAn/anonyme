const cars = [
  { _id: 1, car: "Mitsubishi", model: "Endeavor", year: 2010 },
  { _id: 2, car: "GMC", model: "Sierra 3500HD", year: 2006 },
  { _id: 3, car: "Mercury", model: "Mountaineer", year: 2003 },
  { _id: 4, car: "Land Rover", model: "Discovery", year: 2011 },
  { _id: 5, car: "Lexus", model: "LS", year: 2002 },
  { _id: 6, car: "Saturn", model: "L-Series", year: 2002 },
  { _id: 7, car: "Suzuki", model: "Forenza", year: 2005 },
  { _id: 8, car: "Lamborghini", model: "Gallardo", year: 2011 },
  { _id: 9, car: "Chevrolet", model: "Corvair 500", year: 1963 },
  { _id: 10, car: "Isuzu", model: "Trooper", year: 1999 },
  { _id: 11, car: "Dodge", model: "D150", year: 1993 },
  { _id: 12, car: "Maserati", model: "Spyder", year: 2003 },
  { _id: 13, car: "Mercedes-Benz", model: "M-Class", year: 1998 },
  { _id: 14, car: "Ford", model: "Thunderbird", year: 1994 },
  { _id: 15, car: "Scion", model: "tC", year: 2010 },
  { _id: 16, car: "Mercury", model: "Cougar", year: 1990 },
  { _id: 17, car: "Porsche", model: "968", year: 1992 },
  { _id: 18, car: "Cadillac", model: "Eldorado", year: 2001 },
  { _id: 19, car: "Toyota", model: "Sequoia", year: 2004 },
  { _id: 20, car: "Mercury", model: "Grand Marquis", year: 2000 },
];

async function getCars() {
  return await cars;
}

async function getCar(id) {
  return await cars.filter((item) => item._id == id);
}

module.exports = {
  getCars,
  getCar,
};
