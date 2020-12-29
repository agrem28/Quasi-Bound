const express = require('express');
const cors = require('cors');
const session = require('express-session');
const multer = require('multer');
const passport = require('passport');

const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const dirPath = path.join(__dirname, '..', 'client', 'dist');
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
};
const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

app.disable('x-powered-by');
app.use(multerMid.single('file'));

app.use(express.json());
app.use(express.static(dirPath));
app.use(cors(corsOptions));

app.post('/upload', (req, res) => {
  const From = Buffer.from;
  const b64 = new From(req.file.buffer).toString('base64');
  const mimeType = 'img/png';
  res.send(`data:${mimeType};base64,${b64}`);
});

const discordRoute = require('./routes/discordAuth');
const dbRouter = require('./routes/dbRouter');

app.use(
  session({
    secret: process.env.DISCORD_CLIENT_SECRET,
    cookie: {
      maxAge: 60000 * 60 * 24,
    },
    saveUninitialized: false,
    resave: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', discordRoute);
app.use('/data', dbRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.info(`http://localhost:${PORT}`);
});
