var unsecuredPlainTextPassword = 'password';

// salt is made from a bcrypt method
// salt = unique string that is used to generate another unique unrecognizable string known as a hash from the
// original password string.
// hash =

var colors = require('colors');
var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecuredPlainTextPassword, salt, function(err, hash) {
        console.log(hash.green);
    });
});
