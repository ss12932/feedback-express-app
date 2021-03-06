const express = require('express');
const path = require('path');

const routes = require('./routes');
const { clog } = require('./middleware/clog');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
//log mw needs to be before your routes
app.use(clog);
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
