IdeaCollection = new Mongo.Collection('ideas')

IdeaCollection.before.insert(function (userId, doc) {
  doc.yes_cnt = 1
  doc.no_cnt = 1
  doc.createdAt = Date.now();
});

if(Meteor.isServer){
  Meteor.publish('ideas',function(){
    return IdeaCollection.find()
  })
}
