import { Resource } from '../models/resource.js'

// GET Resource List
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