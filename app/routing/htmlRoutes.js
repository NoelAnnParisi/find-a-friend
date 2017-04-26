// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

const path = require('path');

const htmlRoutes = (app, express) => {
	app.use(express.static(path.join(__dirname, 'app/public')));

	app.get('/', (req,res) =>{
		res.sendFile(path.join(__dirname, '../public/index.html'));
		console.log('yo');
	});

	app.get('/survey', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
		console.log('yo');
	});
};

module.exports = {
	htmlRoutes: htmlRoutes
}