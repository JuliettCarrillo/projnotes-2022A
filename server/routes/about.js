// var express = require('express');
// var router = express.Router();

/* eslint-disable no-console */

const express = require('express');

const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
  // render manda a renderizar (generar y entregar)
  // la vista al cliente
  // Este es el View-Model
  res.render('about', {
     name: 'Juliett Carrillo', 
    email: 'l181130077@gamadero.tecnm.mx',
    url: "www.JULIETTcm.com" });
});
module.exports = router;