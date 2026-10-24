const users = [
  { id: 1, name: 'Ahmed', email: 'ahmed@example.com' },
  { id: 2, name: 'Mona', email: 'mona@example.com' }
];

function nextUserId() {
  let highestId = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id > highestId) highestId = users[i].id;
  }
  return highestId + 1;
}

module.exports = { users, nextUserId };
