import { Meteor } from 'meteor/meteor'
import { Players } from './../imports/api/players';

Meteor.startup( ()=> {
  Players.insert({
    name: 'Zorana',
    score: 46
  });
  // ,{
  //   name: 'Zorana',
  //   score: 33
  // },{
  //   name: 'Roy',
  //   score: -12
  // }
  // find() only returns a pointer to the documents. In order to retrieve the docs we use .fetch()
  console.log(Players.find().fetch());

});
