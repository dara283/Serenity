# Serenity Wellness Studio

A modern wellness studio website built with Vue.js and Express.js. Features yoga class bookings, meditation sessions, wellness coaching services, and an e-commerce shop for mindfulness products.

## Features

- **Services**: Yoga classes, meditation sessions, wellness coaching
- **E-commerce**: Wellness products and accessories
- **Gallery**: Studio photos and class images
- **Responsive Design**: Mobile-friendly interface
- **API Integration**: RESTful backend services

## Tech Stack

- **Frontend**: Vue.js 3, Vue Router, Bootstrap 5, Vite
- **Backend**: Express.js, Node.js
- **HTTP Client**: Axios

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/dara283/Serenity.git
cd Serenity
```

2. Install server dependencies
```bash
cd server
npm install
```

3. Install client dependencies
```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server (Terminal 1)
```bash
cd server
node server.js
```
Server runs on `http://localhost:5000`

2. Start the frontend client (Terminal 2)
```bash
cd client
npm run dev
```
Client runs on `http://localhost:3000`

## API Endpoints

- `GET /api/products` - Get all wellness products
- `GET /api/services` - Get all wellness services
- `GET /api/gallery` - Get gallery images
- `GET /api/products/:id` - Get specific product

## Project Structure

```
serenity/
├── client/                 # Vue.js frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── router/         # Vue Router config
│   │   └── api.js          # API configuration
│   └── public/             # Static assets
└── server/                 # Express.js backend
    ├── server.js           # Main server file
    └── package.json        # Server dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).