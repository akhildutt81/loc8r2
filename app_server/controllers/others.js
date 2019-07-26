module.exports.about = function(req, res){
	let sessionUser=req.session?req.session.email:req.session;
	res.render('generic-text', {
		title: "About",
		content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi dignissim accumsan. Nullam sit amet interdum magna. Morbi quis faucibus nisi. Vestibulum mollis purus quis eros adipiscing tristique. Proin posuere semper tellus, id placerat augue dapibus ornare. Aenean leo metus, tempus in nisl eget, accumsan interdum dui. Pellentesque sollicitudin volutpat ullamcorper.',
		sessionUser:sessionUser
	});
};

module.exports.signin = function(req,res){
	let sessionUser=req.session?req.session.email:req.session;
	res.render('signin',{
		sessionUser:sessionUser
	});
}

module.exports.signinUser=function(req,res){
	let email=req.body.email;
	let sessionUser=req.session?req.session.email:req.session;
	let password=req.body.password;
	if(email=="akhildutt81@gmail.com" && password=="akhil"){
		req.session.email="akhildutt81@gmail";
		res.redirect('/');
	}
	console.log(req.body);
	res.render('signin',{
		sessionUser:sessionUser
	});
}
module.exports.signout=function(req,res){
	req.session.destroy(function(err){
		res.redirect('/');
	});
}