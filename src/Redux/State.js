import { rerenderEnireTree, rerenderEntireTree } from '../render';

let state = {
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
};

window.state = { state };
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likeCount: 1,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};
export let addMessage = () => {
  let newMessage = {
    id: 9,
    message: state.dialogsPage.newMessageText,
  };
  state.dialogsPage.message.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree(state);
};
export let updateNewTextPost = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export let updateNewMessagePost = (newTMessage) => {
  state.dialogsPage.newMessageText = newTMessage;
  rerenderEntireTree(state);
};
export default state;
