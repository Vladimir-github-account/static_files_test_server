const express = require ('express');
const path = require('path');

const app = express();
const port = 3000;

/*
const notFound = express.Router();

//app.use('./', express.static('./notFound'));

/!*notFound.get( '',
              (req, res) => {
                app.use(express.static('./'));
                res.sendFile('/' );
              }
);*!/

//router.use( '/user',  notFound);
router.use( '/user',  app.use(express.static('./notFound')));
router.use( '/',  app.use(express.static('./')));

//app.use( router );
app.use( router );

/!*app.get(/.{2,10000}$/, (req, res) =>
  res.sendFile('./'));*!/
*/

/*const notFoundRouter = express.Router();
function sendNotFound(req, res, next){
  express.static('./');
  res.send();
}

notFoundRouter.get( '/',
                sendNotFound
);*/

const router = express.Router();
router.use( '/user', express.static('./') );
router.use( '/', express.static('./') );
router.use( /.*/ , (req, res, next ) => {
  res.status(404).sendFile(path.resolve(__dirname, './notFound/index.html'));
});

app.use( router );
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
