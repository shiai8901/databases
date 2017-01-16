var db = require('../db');

module.exports = {
  messages: {
    get: function(callback) {
      var queryStr = 'select messages.M_id, messages.message_content, messages.room, users.name \
                      from messages left outer join users on (messages.user = users.U_id) \
                      order by messages.id desc';   
      db.query(queryString, function(err, results) {
        callback(err, results);
      });   
    },
    // get: function (req, res) {
    //   var queryString = 'SELECT * FROM ';
    //   var queryArgs = [];
    //   db.query(queryString, queryArgs, function(err, results, fields) {
    //     if (err) {
    //       console.error(err);
    //     } else {
    //       console.log('Get from database with ', queryString, ', the results are ', results);
    //       res.writeHead(200);
    //       res.end(results);
    //     }
    //   });
    // }, // a function which produces all the messages
    post: function(params, callback) {
      var queryString = 'insert into messages(message_content, user, roomn) \
                      value (?, (select U_id from users where name = ? limit 1), ?)';
      db.query(queryString, params, function(err, results) {
        callback(err, results);
      });
    },
    // post: function (req, res) {
    //     var queryString = 'SELECT * FROM users';
    //     var queryArgs = [];
    //     db.query(queryString, queryArgs, function() {

    //     });
    // } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryString = 'SELECT * FROM users';
      db.query(queryString, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var queryString = 'INSERT INTO users (name) VALUES (?)';
      db.query(queryString, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};

