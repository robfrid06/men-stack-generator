import { Resource } from '../models/resource.js'

function index(req, res) {
  Resource.find({})
  .then(resources => {
    res.render('resources/index', {
      resources: resources
    });
  })
  .catch(error => {
    console.log(error);
    res.redirect('/');
  }) ;
};

export {
  index
}