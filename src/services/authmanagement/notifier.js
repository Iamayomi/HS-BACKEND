const sendEmail = require('../../utils/sendEmail');
const changeEmail = require('../mailer/mail-templates/change-email');
const changePassword = require('../mailer/mail-templates/change-password');
const emailVerified = require('../mailer/mail-templates/email-verified');
const resetPassword = require('../mailer/mail-templates/reset-password');
const verifyEmail = require('../mailer/mail-templates/verify-email');

module.exports = (app)=> {
  const EMAIL_SENDER = 'Healthstack <admin@healthstack.africa>';

  function getLink(type, hash) {
    const prefix = app.get('emailLinkHostPrefix');
    const url = `${prefix}/login/?type=${type}&token=${hash}`;
    return url;
  }

  return {
    notifier: function(type, user) {
      let hashLink;
      let email;
      switch (type) {
      case 'resendVerifySignup': //sending the user the verification email
        hashLink = getLink('verify', user.verifyToken);
        email = {
          from: EMAIL_SENDER,
          to: user.email,
          subject: 'Verify Signup',
          html: verifyEmail({name: user.name, hashLink})
        };
        return sendEmail(app, email);

      case 'verifySignup':
        email = {
          from: EMAIL_SENDER,
          to: user.email,
          subject: 'Verify Signup',
          html: emailVerified({name: user.name})
        };
        return sendEmail(app, email);

      case 'sendResetPwd':
        hashLink = getLink('reset', user.resetToken);
        email = {
          from: EMAIL_SENDER,
          to: user.email,
          subject: 'Reset Password',
          html: resetPassword({name: user.name, hashLink})
        };
        return sendEmail(app, email);

      case 'resetPwdLong':
        email = {
          from: EMAIL_SENDER,
          to: user.email,
          subject: 'Reset Password',
          html: changePassword({name: user.name})
        };
        return sendEmail(app, email);
      
      case 'passwordChange':
        email = {
          from: EMAIL_SENDER,
          to: user.email,
          subject: 'Change Password',
          html: changePassword({name: user.name})
        };
        return sendEmail(app, email);

      case 'identityChange':
        hashLink = getLink('changeEmail', user.verifyToken);
        email = {
          from: EMAIL_SENDER,
          to: user.email,
          subject: 'Change Email',
          html: changeEmail({name: user.name, hashLink})
        };
        return sendEmail(app, email);

      default:
        break;
      }
    }
  };
};