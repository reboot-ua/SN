import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 't\'s my first post', likeCount: '21'},
                {id: 2, message: 'Hi, how are you?', likeCount: '1'}
            ],
            newPost: ''
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Hello Yo YOYo')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },  // Наблюдатель Патерн

    dispatch(action) {  // { type: ''ADD-POST }

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};

export default store;
window.store = store;