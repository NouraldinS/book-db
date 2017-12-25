const path = require('path');

exports.client = (req, res) => {
  res
    .status(404)
    .send('<h1>Error 404: Not Found');
    // .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

exports.server = (err, req, res, next) => {
  res
    .status(500)
    .send('<h1>Error 500: Internal server error');
    // .sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};
