const { users, nextUserId } = require('../models/userModel');

function validText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function createUser(req, res) {
  const { name, email } = req.body || {};
  if (!validText(name) || !validText(email)) {
    return res.status(400).json({ message: 'name and email must be non-empty strings' });
  }
  const user = { id: nextUserId(), name: name.trim(), email: email.trim() };
  users.push(user);
  return res.status(201).json(user);
}

function getAllUsers(req, res) {
  return res.status(200).json(users.map(({ id, name, email }) => ({ id, name, email })));
}

function getUserById(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: 'ID must be a positive integer' });
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) return res.status(200).json(users[i]);
  }
  return res.status(404).json({ message: 'User not found' });
}

function updateUser(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: 'ID must be a positive integer' });
  }
  const { name, email } = req.body || {};
  if (!validText(name) || !validText(email)) {
    return res.status(400).json({ message: 'name and email must be non-empty strings' });
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i].name = name.trim();
      users[i].email = email.trim();
      return res.status(200).json(users[i]);
    }
  }
  return res.status(404).json({ message: 'User not found' });
}

function deleteUser(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: 'ID must be a positive integer' });
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
      return res.status(200).json({ message: 'User deleted successfully' });
    }
  }
  return res.status(404).json({ message: 'User not found' });
}

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };
