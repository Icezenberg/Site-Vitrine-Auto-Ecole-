var express = require ('express');
var server = express();


/**
 * Route statique vers dossier public
 */
server.use(express.static('public'));

/**
 * Route vers index.html
 */
server.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/**
 * Route vers offre.html
 */
server.get('/offre', function (req, res) {
    res.sendFile(__dirname + '/offre.html');
});

/**
 * Route vers tarifs.html
 */
server.get('/tarifs', function (req, res) {
    res.sendFile(__dirname + '/tarifs.html');
});

/**
 * Route vers contact.html
 */
server.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

/**
 * Route vers test.html
 */
server.get('/test', function (req, res) {
    res.sendFile(__dirname + '/test.html');
});

/**
 * Route vers test2.html
 */
server.get('/test2', function (req, res) {
    res.sendFile(__dirname + '/test2.html');
});
/**
 * Route vers test2.html
 */
server.get('/test3', function (req, res) {
    res.sendFile(__dirname + '/test3.html');
});
/**
 * Port d'écoute
 */
server.listen(3010, function() { console.log("Listening on port 3010")});