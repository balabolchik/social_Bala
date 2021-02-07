const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    userDialogs: [
        { id: "01", img:"https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-9/93791884_267735644265729_7768064403450101760_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=B1rvU1HQ7VYAX_VH6R2&_nc_ht=scontent.fiev2-1.fna&oh=03a6bd1d2b74594587e9a1d535cc86c2&oe=6043B059", name: "Nastya", surname: "Nemyrka"},
        { id: "02", img:"https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-1/p200x200/62407680_457643228344986_7513279375719006208_o.jpg?_nc_cat=101&ccb=2&_nc_sid=7206a8&_nc_ohc=YxrPn1Z97kUAX9Fzjbx&_nc_ht=scontent.fiev2-1.fna&tp=6&oh=0e2e9d71379bd956e473d2bbaeda6f6c&oe=60456B37", name: "Ruslan", surname: "Sudomlyak"},
        { id: "03", img:"https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-9/21462795_107300816679875_4319652128532239572_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=9E_fvAQF5AoAX9K4VBk&_nc_oc=AQm1B7-w9cC0cJ4KSQCFgeF4RYN_mBoBnEM0JFiKDoPJkqlNLZafAsDTeS_pbRi5-iM&_nc_ht=scontent.fiev2-1.fna&oh=d5b6818c650f1d4da8adcabfca7e6b9b&oe=60459ACE", name: "Vitya", surname: "Bordulyak"},
        { id: "04", img:"https://scontent.fiev2-1.fna.fbcdn.net/v/t1.0-9/142685873_812836689298534_2235300987953702822_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=BBRdiR2u8ZIAX_jiEoE&_nc_ht=scontent.fiev2-1.fna&oh=f7b43fbf4c284d254646e8f9caea0b29&oe=60467C2C", name: "Natalia", surname: "Sudomlyak"},
    ],
    userMessages: [
        { id: 1, userMessage: "Hello, Oleg =)" },
        { id: 2, userMessage: "How are you?" },
        { id: 3, userMessage: "How are you?sffgdhgdffgdgnbvfvdjvhdufgvy udfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd"},
        { id: 4, userMessage: "How are you?sffgdhgdffgdgnbvfvdjvhdufgvy udfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd"},
        { id: 5, userMessage: "How are you?sffgdhgdffgdgnbvfvdjvhdufgvy udfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd"},
        { id: 6, userMessage: "How are you?sffgdhgdffgdgnbvfvdjvhdufgv yudfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd"},
        { id: 7, userMessage: "How are you?sffgdhgdffgdgnbvfvdjvhdufgvy udfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd"},
        { id: 8, userMessage: "How are you?sffgdhgdffgdgnbvfvdjvhdufgvy udfgvudfhvdfvhudfvudfvd skjdcnshbdvcysgbdhcnjsdcsd"},
        { id: 9, userMessage: "Nastya, you are so beautifull!" },
    ],
    newMessageText: ``,
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            return { 
                ...state,
                userMessages: (state.newMessageText!=="")?[...state.userMessages, { id: 10, userMessage: `${state.newMessageText}`}]:[...state.userMessages],
                newMessageText: ""
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return { 
                ...state,
                newMessageText: action.newMessageText
            };
        }
        default: {
            return state;
        }
    }
};

export const updateNewMessageText = newMessageText => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessageText });
export const sendMessage = () => ({ type: SEND_MESSAGE });

export default messagesReducer;
