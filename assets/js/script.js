
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://smtp-e-mail-sender.p.rapidapi.com/v3/smtpjs.aspx",
	"method": "POST",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "smtp-e-mail-sender.p.rapidapi.com",
		"x-rapidapi-key": "61f7e1e89amsh916d43089bd98bep10b853jsn09283b1f8040"
	},
	"processData": false,
	"data": {
		"Host": "smtp.yourisp.com",
		"Username": "username",
		"Password": "password",
		"To": "ddoherty6@gmail.com",
		"Bcc": "",
		"From": "dandoherty537@yahoo.com",
		"Subject": "This is the subject",
		"Body": "And this is the body",
		"nocache": "441137",
		"Action": "Send"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
