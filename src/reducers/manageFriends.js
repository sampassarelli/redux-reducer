export function manageFriends(state = {friends: []}, action){
  switch(action.type){
      case "ADD_FRIEND":
          return {friends: [...state.friends, action.friend]}
      case "REMOVE_FRIEND":
          const newFriends = [...state.friends].filter(friend => friend.id !== action.id)
          state = { friends: newFriends}
  }
  return state
}