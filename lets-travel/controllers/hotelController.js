exports.homePage = (req, res) =>{
	res.render('index', { title: 'LetsTravel' });
}

exports.listAllHotels = (req, res) => {
	res.render('all_hotels',{title: 'All Hotels'}); 
}

exports.signUp = (req,res, next) => {
	//validate user info 
	console.log('sign up middleware')
	next()
}

exports.logIn = (req, res) => {
	//Login 
	console.log('Log in middleware')
}