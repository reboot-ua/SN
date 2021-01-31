const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        {
            id: 1,
            name: 'Sergii',
            img: 'https://ndsm.su/wp-content/uploads/2020/01/Skoda-Octavia-%D0%908-2020-foto-2.jpg'
        },
        {
            id: 2,
            name: 'Irina',
            img: 'https://ndsm.su/wp-content/uploads/2020/01/Skoda-Octavia-%D0%908-2020-foto-2.jpg'
        },
        {
            id: 3,
            name: 'Kate',
            img: 'https://ndsm.su/wp-content/uploads/2020/01/Skoda-Octavia-%D0%908-2020-foto-2.jpg'
        },
        {
            id: 4,
            name: 'Alla',
            img: 'https://ndsm.su/wp-content/uploads/2020/01/Skoda-Octavia-%D0%908-2020-foto-2.jpg'
        },
        {
            id: 5,
            name: 'Mark',
            img: 'https://ndsm.su/wp-content/uploads/2020/01/Skoda-Octavia-%D0%908-2020-foto-2.jpg'
        }
    ],
    messageData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'yo'},
        {id: 3, message: 'Yes'},
        {id: 4, message: 'Cool'},
        {id: 5, message: 'Hello'}
    ]
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return  {
                ...state,
                messageData: [...state.messageData, {id: 1212, message: body}]
            };
        default:
            return state
    }
};
export const sendMessageCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessageBody
    }
};


export default dialogReducer