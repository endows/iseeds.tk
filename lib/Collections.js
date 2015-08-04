PostCollection = new Mongo.Collection('posts')
IdeaCollection = new Mongo.Collection('ideas')

if(Meteor.isServer){
  Meteor.publish('posts',function(){
    return PostCollection.find()
  })
  Meteor.publish('ideas',function(){
    return IdeaCollection.find()
  })
}
