
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'The BarberPole - what do you think?' });
  console.log(req.session)
};