# Basic API

A simple REST API built with Node.js and Express for managing participants.

## Requirements

- Node.js v18+
- npm

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server runs at `http://localhost:3000` by default. Set the `PORT` environment variable to use a different port.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Health check — returns a hello world message |
| GET | `/participants` | Returns the list of all participants |
| GET | `/participants/:email` | Returns a single participant by email |
| POST | `/participants` | Adds a new participant |
| DELETE | `/participants/:email` | Deletes a participant by email |

### POST `/participants`

**Request body:**

```json
{
  "email": "user@example.com",
  "username": "johndoe"
}
```

**Response (201):**

```json
{
  "message": "Participante guardado",
  "participant": {
    "email": "user@example.com",
    "username": "johndoe"
  }
}
```

Both `email` and `username` are required. Missing either returns a `400` error.

### GET `/participants/:email`

Returns a single participant matching the given email. Returns `404` if not found.

**Response (200):**

```json
{
  "participant": {
    "email": "user@example.com",
    "username": "johndoe"
  }
}
```

### DELETE `/participants/:email`

Deletes the participant matching the given email. Returns `404` if not found.

**Response (200):**

```json
{
  "message": "Participante eliminado"
}
```

## Notes

- Data is stored in memory and will reset when the server restarts.
