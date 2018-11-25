export const people = [
  {
    id: "1",
    name: "cemujax",
    age: 11,
    gender: "male"
  },
  {
    id: "2",
    name: "john",
    age: 22,
    gender: "male"
  },
  {
    id: "3",
    name: "james",
    age: 33,
    gender: "male"
  },
  {
    id: "4",
    name: "tom",
    age: 44,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => String(id) === person.id);
  return filteredPeople[0];
};
