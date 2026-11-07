import express from 'express';

const app = express();

//define a port number for server to listen on
const PORT = 3010; // Choose an available port number

//set new engine to EJS 
app.set('view engine', 'ejs');

app.use(express.static('public'));

//defining a default route 
app.get('/', (req, res) => {
    const person = {
         name: 'Donald Duck',
         occupation:'plumber', 
         favoriteColor: 'Teal'};
  res.render('home', {person});

});

//start server on designated port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));