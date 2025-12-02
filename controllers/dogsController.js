const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getDogs = async (req, res) => {
  try {
    const dogs = await prisma.dog.findMany();
    res.json(dogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addDog = async (req, res) => {
  try {
    const { name, breed, age } = req.body;
    const newDog = await prisma.dog.create({
      data: { name, breed, age }
    });
    res.status(201).json(newDog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDog = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const deleted = await prisma.dog.delete({ where: { id } });
    res.json(deleted);
  } catch (err) {
    res.status(404).json({ error: 'Dog not found' });
  }
};

exports.updateDog = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { name, breed, age } = req.body;
    const updated = await prisma.dog.update({
      where: { id },
      data: { name, breed, age }
    });
    res.json(updated);
  } catch (err) {
    res.status(404).json({ error: 'Dog not found' });
  }
};
