FlowRouter.route("/idea", {
  subscriptions: function() {
    this.register('ideas', Meteor.subscribe('ideas'));
  },
  action: function () {
    FlowRouter.subsReady("ideas", function() {
      let _ideas = IdeaCollection.find().fetch()
      ReactLayout.render(MainLayout, {
        content:
        <IdeaList ideas={_ideas}/>
      });
    });
  }
});



FlowRouter.route("/idea/:_id", {
  subscriptions: function() {
    this.register('ideas', Meteor.subscribe('ideas'));
  },
  action: function (params) {
    FlowRouter.subsReady("ideas", function() {
      let _idea = IdeaCollection.findOne({_id:params._id})
      ReactLayout.render(MainLayout, {
        content:
        <Idea idea={_idea}/>
      });
    });
  }
});
