function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

polishedBoardMember.veto = function(){
    console.log('No, I must disagree')
  }
