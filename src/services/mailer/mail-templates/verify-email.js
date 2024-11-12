module.exports = function(data) {
  const tpl = `<html>
  <head>
    <title></title>
  </head>
  <body>
    <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Left;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
      <p>Hello ${data.name || ''},</p>

<p>You can verify your email by clicking the <a href=${data.hashLink} title="verify link" target="blank">link</a> or copying it below and pasting into your browser. For increased security, this email verification link will expire 24 hours after it was sent.
</p>
<p>${data.hashLink}</p>

<p>Thanks, Healthstack Solution</p>



<p>You can't unsubscribe from important emails about your account like this one. </p>

<div>
<p>Healthstack Solution Limited</p>
<p>www.healthstack.africa</p>
<p>0700healthstack</p>
<p>help@healthstack.africa</p>
</div>
    </div>
  </body>
</html>`;
  return tpl;
};