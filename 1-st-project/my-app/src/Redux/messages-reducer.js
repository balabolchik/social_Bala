const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE";

const messagesReducer = (action, state) => {
    switch (action) {
        case SEND_MESSAGE: {
            if (state.newMessageText !==``) {
                state.userMessages.push({id: 10, userMessage: `${state.newMessageText}`})
            };
            state.newMessageText = "";
            return state;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newMessageText;
        }
        default: {
            return state;
        }
    }
}

export default messagesReducer;