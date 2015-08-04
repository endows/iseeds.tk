IdeaCollection = new Mongo.Collection('ideas')

if(Meteor.isServer){
  Meteor.publish('ideas',function(){
    return IdeaCollection.find()
  })
}
