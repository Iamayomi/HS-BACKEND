function sendEmail(app, email) {
  return app.service('mailer').create(email).then(function (result) {
    //console.log('Sent email', result);
  }).catch(err => {
    //console.log('Error sending email', err);
  });
}

module.exports = sendEmail;