function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

PolishedBoardMember.veto = function(){
    console.log('No, I must disagree')
  }
