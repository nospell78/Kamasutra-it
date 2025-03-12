let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, what's your name?", likeCount: 5 },
        { id: 2, message: 'Hi, my name is Nikita', likeCount: 17 },
      ],
      imgUrl:
        'https://avatars.mds.yandex.net/get-mpic/4356316/img_id226114034044091517.jpeg/orig',
      text: 'ava + description',
      newPostText: 'it-kamasutra.com',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Cаша' },
        { id: 2, name: 'Даша' },
        { id: 3, name: 'Дима' },
        { id: 4, name: 'Игоша' },
      ],
      message: [
        { id: 1, message: 'Как ты?' },
        { id: 2, message: 'Всё хоршо, надо будет встретиться!' },
        { id: 3, message: 'В Пролетарке, иду домой.' },
        { id: 4, message: 'Хорошо, как домой придёшь позвони.' },
        { id: 5, message: 'Окей.' },
        { id: 6, message: 'До встречи.' },
        { id: 7, message: 'Ага.' },
      ],
      newMessageText: 'YoYoYo',
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('State changer');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 1,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-TEXT-POST') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 9,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.message.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-POST') {
      this._state.dialogsPage.newMessageText = action.newTMessage;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = { store };
