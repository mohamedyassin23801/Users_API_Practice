# Users API Practice — Lab 5

## Run
1. Install Node.js.
2. Open a terminal in this folder and run `npm install`.
3. Run `npm start`.
4. Base URL: `http://localhost:3000/api/v1/users`.

## Postman requests
- `POST /api/v1/users` JSON: `{ "name": "Sara", "email": "sara@example.com" }`
- `GET /api/v1/users`
- `GET /api/v1/users/1`
- `PUT /api/v1/users/1` JSON: `{ "name": "Sara Updated", "email": "sara.updated@example.com" }`
- `DELETE /api/v1/users/1`

For POST and PUT, select Body → raw → JSON. IDs are generated using the highest existing ID plus one, so deleting a user will not cause that ID to be reused while the server is running. Data is stored in memory and resets when the server restarts.
