import express from 'express';

const app = express();

//define a port number for server to listen on
const PORT = 3010; // Choose an available port number

//set new engine to EJS 
app.set('view engine', 'ejs');

app.use(express.static('public'));

//defining a default route 
app.get('/', (req, res) => {
    //creating JSON object "person"
    const person = {
         name: 'Donald Duck',
         occupation:'Real Estate Agent', 
         favoriteColor: 'Pink'};
  res.render('home', {person});

});

app.get('/friends', (req, res) => {
    const friends= ['Mickey','Goofy','Minnie','Daisy'];
    res.render('friends',{friends});

});

app.get('/movies', (req, res) => {
    const movies= ['Annie','Suicide Squad','Tangled','High School Musical 3'];
    res.render('movies',{movies});

});

//start server on designated port
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));