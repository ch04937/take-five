import { randomBoolean } from "./usefulFunction";

const queueMatch = (state, action) => {
  return {
    ...state,
    is_loading: false,
    player: {
      ...state.player,
      isPlayingAgainst: action.payload,
      isInQueue: true,
    },
  };
};

const startMatch = (state, action) => {
  return {
    ...state,
    room: {
      ...state.room,
      player1: action.payload.player1,
      player2: action.payload.player2,
      playerTurn: randomBoolean()
        ? action.payload.player1.playerUuid
        : action.payload.player2.playerUuid,
    },
    player: {
      ...state.player,
      isPlaying: true,
      isPlayingAgainst: action.payload.player2.playerUuid,
    },
  };
};
const playMove = (state, action) => {
  return {
    ...state,
    is_loading: false,
    room: {
      ...state.room,
      ...action.payload,
      // increment the turn by 1
      roomTurn: state.room.roomTurn + 1,
    },
  };
};
const initUser = (state, action) => {
  return {
    ...state,
    is_loading: false,
    player: { ...state.player, playerUuid: action.payload },
  };
};
const initRoom = (state, action) => {
  return {
    ...state,
    is_loading: false,
    room: { ...state.room, ...action.payload },
    player: { ...state.player, isPlaying: true },
  };
};
const toggle = (state, action) => {
  return {
    ...state,
    player: {
      ...state.player,
    },
  };
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "QUEUE_MATCH":
      return queueMatch(state, action);
    case "START_MATCH":
      return startMatch(state, action);
    case "PLAY_MOVE":
      return playMove(state, action);
    case "INITIALIZE_USER":
      return initUser(state, action);
    case "INITIALIZE_ROOM":
      return initRoom(state, action);
    case "TOGGLE":
      return toggle(state, action);
    default:
      return state;
  }
};
