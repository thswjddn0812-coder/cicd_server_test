let dogs = [
  { id: 1, name: '코코', breed: '푸들', age: 3 },
  { id: 2, name: '초코', breed: '말티즈', age: 2 }
];
let nextId = 3;

exports.getDogs = (req, res) => {
  res.json(dogs);
};

exports.addDog = (req, res) => {
  const { name, breed, age } = req.body;
  const newDog = { id: nextId++, name, breed, age };
  dogs.push(newDog);
  res.status(201).json(newDog);
};

exports.deleteDog = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = dogs.findIndex(dog => dog.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Dog not found' });
  const deleted = dogs.splice(idx, 1);
  res.json(deleted[0]);
};

exports.updateDog = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = dogs.findIndex(dog => dog.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Dog not found' });
  const { name, breed, age } = req.body;
  dogs[idx] = { id, name, breed, age };
  res.json(dogs[idx]);
};
