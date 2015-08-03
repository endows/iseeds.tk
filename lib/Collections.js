PostCollection = new Mongo.Collection('posts')

if(Meteor.isServer){
  Meteor.publish('posts',function(){
    return PostCollection.find()
  })
}
