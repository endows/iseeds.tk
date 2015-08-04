if Meteor.isClient
  console.log('okk')
  Meteor.methods
    'vote':(idea_id,flag)->
      if flag
        IdeaCollection.update({_id:idea_id},{$inc:{yes_cnt:1}})
      else
        IdeaCollection.update({_id:idea_id},{$inc:{no_cnt:1}})
