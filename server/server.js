// server.js (inside serenity/server)
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ===== In-memory data =====
// ===== In-memory data =====
const products = [
  { 
    id: 1, 
    name: 'Eco-Friendly Yoga Mat', 
    price: 499, 
    desc: 'Sustainable, non-slip mat for safe practice.', 
    img: '/images/products/yoga-mat.jpeg', 
    badge: 'Bestseller' 
  },
  { 
    id: 2, 
    name: 'Meditation Cushion', 
    price: 350, 
    desc: 'Comfortable support for longer meditation.', 
    img: '/images/products/meditation-cushion.jpeg' 
  },
  { 
    id: 3, 
    name: 'Aromatherapy Oils Pack', 
    price: 299, 
    desc: 'Lavender, eucalyptus, peppermint blends.', 
    img: '/images/products/oils-pack.jpeg', 
    badge: 'New' 
  },
  { 
    id: 4, 
    name: 'Yoga Block', 
    price: 229, 
    desc: 'Enhance form and flexibility safely.', 
    img: '/images/products/block.jpeg' 
  },
  { 
    id: 5, 
    name: 'Weighted Eye Pillow', 
    price: 149, 
    desc: 'Gentle relaxation for eyes and mind.', 
    img: '/images/products/eye-pillow.jpeg' 
  },
  { 
    id: 6, 
    name: 'Serenity Studio Tote Bag', 
    price: 180, 
    desc: 'Carry your wellness gear in style.', 
    img: '/images/products/tote-bag.jpeg' 
  },
  { 
    id: 7, 
    name: 'Glass Water Bottle', 
    price: 260, 
    desc: 'Sustainable glass bottle for hydration on the go.', 
    img: '/images/products/glass-water-bottle.jpeg', 
    badge: 'Eco' 
  },
  { 
    id: 8, 
    name: 'Yoga Wheel',         
    price: 399, 
    desc: 'Improve backbends and mobility with a supportive wheel.', 
    img: '/images/products/yoga-wheel.jpeg' 
  },
  { 
    id: 9, 
    name: 'Holder Set', 
    price: 120, 
    desc: 'Calming scents to enhance your pre-practice ritual.', 
    img: '/images/products/holder-set.jpeg' 
  },
];


const services = [
  {
    id: 1,
    title: 'Gentle Flow Yoga',
    price: 'R250 per class',
    desc: 'Slow-paced class ideal for beginners. Focus on form, breath, and safe alignment.',
    duration: '60 min',
    level: 'Beginner',
    intensity: 'Low',
    coach: 'Lindiwe',
    schedule: 'Mon & Wed 18:00'
  },
  {
    id: 2,
    title: 'Vinyasa Energize',
    price: 'R280 per class',
    desc: 'Dynamic flow building strength and heat. Options provided for all levels.',
    duration: '60 min',
    level: 'All levels',
    intensity: 'Medium',
    coach: 'Sam',
    schedule: 'Tue & Thu 17:30'
  },
  {
    id: 3,
    title: 'Guided Meditation',
    price: 'R200 per session',
    desc: 'Mindfulness, breath, and body scan to reduce stress and improve focus.',
    duration: '30 min',
    level: 'All levels',
    intensity: 'Low',
    coach: 'Aisha',
    schedule: 'Fri 07:30'
  },
  {
    id: 4,
    title: 'Restorative Yoga',
    price: 'R250 per class',
    desc: 'Deep relaxation with props. Calm the nervous system and release tension.',
    duration: '60 min',
    level: 'All levels',
    intensity: 'Low',
    coach: 'Thabo',
    schedule: 'Sat 10:00'
  },
  {
    id: 5,
    title: 'Wellness Coaching',
    price: 'R550 per session',
    desc: 'Personalised lifestyle guidance covering sleep, stress, movement, and nutrition basics.',
    duration: '45 min',
    level: 'Personal',
    intensity: '—',
    coach: 'Nadia',
    schedule: 'By appointment'
  },
  {
    id: 6,
    title: 'Prenatal Yoga',
    price: 'R260 per class',
    desc: 'Supportive space for expectant mothers. Gentle strength, breath, and pelvic floor care.',
    duration: '60 min',
    level: 'Prenatal',
    intensity: 'Low',
    coach: 'Cleo',
    schedule: 'Sun 09:00'
  }
];


const gallery = [
  { id: 1, url: '/images/yoga-class.jpg', alt: 'Group yoga class in a serene, sunlit studio' },
  { id: 2, url: '/images/meditation-circle.jpg', alt: 'Group seated in meditation circle' },
  { id: 3, url: '/images/aromatherapy-session.jpg', alt: 'Essential oils on a wooden tray with candles' },
  { id: 4, url: '/images/stretch-pose.jpg', alt: 'Instructor guiding a participant in a yoga pose' },
  { id: 5, url: '/images/breathwork.jpg', alt: 'Close-up of participant practicing breathing exercises' },
  { id: 6, url: '/images/restorative-yoga.jpg', alt: 'Restorative yoga session with blocks and bolsters' },
  { id: 7, url: '/images/studio-entrance.jpg', alt: 'Studio entrance with welcoming decor' },
  { id: 8, url: '/images/wellness-shop.jpg', alt: 'Wellness products displayed in studio shop' },
  { id: 9, url: '/images/happy-clients.jpg', alt: 'Smiling members after a relaxing class' },
];

// ===== Routes =====
app.get('/api/products', (req, res) => res.json(products));
app.get('/api/services', (req, res) => res.json(services));
app.get('/api/gallery',  (req, res) => res.json(gallery));

// Optional product detail
app.get('/api/products/:id', (req, res) => {
  const item = products.find(p => String(p.id) === req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
