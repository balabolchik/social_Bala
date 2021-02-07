import messagesReducer from "./messages-reducer";
import musicReducer from "./music-reducer";
import newsReducer from "./news-reducer";
import profileReducer from "./profile-reducer";
import settingsReducer from "./settings-reducer";

let store = {
  _state: {
    messagePage: {
      userDialogs: [
        {
          id: "01",
          img:
            "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/104172136_303230194049607_271042418530192518_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=POCC1MBS5WwAX-hlR2r&_nc_ht=scontent.flwo1-1.fna&oh=e3fd966665642cebbbf4830cf9ebe56c&oe=601BC2BD",
          name: "Nastya",
          surname: "Nemyrka",
        },
        {
          id: "02",
          img:
            "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/62407680_457643228344986_7513279375719006208_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=7iGbvox45uoAX_MFv6w&_nc_ht=scontent.flwo1-1.fna&oh=4f65453bb2deeca4fb80a626fe9ec811&oe=601AE588",
          name: "Ruslan",
          surname: "Sudomlyak",
        },
        {
          id: "03",
          img:
            "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/21462795_107300816679875_4319652128532239572_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=U0weYsuzDg8AX96Z5si&_nc_oc=AQk9LzoENwVidL5LRU-XfnWjeTYi7Ft1W5doVrXrzphPl419CZeOj8uGC06rbCSWbtk&_nc_ht=scontent.flwo1-1.fna&oh=08b107e8d98f074e340ad0b783397b3c&oe=601A194E",
          name: "Vitya",
          surname: "Bordulyak",
        },
        {
          id: "04",
          img:
            "https://scontent.flwo1-1.fna.fbcdn.net/v/t1.0-9/18767450_118844922031051_1814599832622707971_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=CaOROYeoCg8AX_Jdz5m&_nc_ht=scontent.flwo1-1.fna&oh=32a06d8289ff4e1b0909db34997afa4d&oe=601B8922",
          name: "Natalia",
          surname: "Sudomlyak",
        },
      ],
      userMessages: [
        { id: 1, userMessage: "Hello, Oleg =)" },
        { id: 2, userMessage: "How are you?" },
        {
          id: 3,
          userMessage:
            "How are you?sffgdhgdffgdgnbvfvdjvhdufgvyudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd",
        },
        {
          id: 4,
          userMessage:
            "How are you?sffgdhgdffgdgnbvfvdjvhdufgvyudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd",
        },
        {
          id: 5,
          userMessage:
            "How are you?sffgdhgdffgdgnbvfvdjvhdufgvyudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd",
        },
        {
          id: 6,
          userMessage:
            "How are you?sffgdhgdffgdgnbvfvdjvhdufgvyudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd",
        },
        {
          id: 7,
          userMessage:
            "How are you?sffgdhgdffgdgnbvfvdjvhdufgvyudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd",
        },
        {
          id: 8,
          userMessage:
            "How are you?sffgdhgdffgdgnbvfvdjvhdufgvyudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd",
        },
        { id: 9, userMessage: "Nastya, you are so beautifull!" },
      ],
      newMessageText: ``,
    },
    profilePage: {
      userPosts: [
        { id: 1, text: "My first post!" },
        { id: 2, text: "My second post!" },
        { id: 3, text: "My third post!" },
        { id: 4, text: "My last post!" },
      ],
      newPostText: ``,
    },
    musicPage: {},
    newsPage: {},
    settingPage: {},
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messagesReducer(this._state.messagePage, action);
    this._state.newsPage = newsReducer(this._state.newsPage, action);
    this._state.musicPage = musicReducer(this._state.musicPage, action);
    this._state.settingsPage = settingsReducer(this._state.settingsPage, action);
  },
};

export default store;
window.store = store;
