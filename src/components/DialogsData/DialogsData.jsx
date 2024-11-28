import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogsItems from "./DialogItem/DialogItem";
import Massage from "./Message/Message";


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: "Cаша"},
        {id: 2, name: "Даша"},
        {id: 3, name: "Дима"},
        {id: 4, name: "Игоша"}
    ]
    let massages = [
        {id: 1, massage: "Как ты"},
        {id: 2, massage: "Всё хоршо, надо будет встретиться!"},
        {id: 3, massage: "В Пролетарке, иду домой."},
        {id: 4, massage: "Хорошо, как домой придёшь позвони."},
        {id: 5, massage: "Окей."},
        {id: 6, massage: "До встречи."},
        {id: 7, massage: "Ага."}
    ]
    let dialogsElement = dialogs.map(d => <DialogsItems name={d.name} id={d.id}/>)
    let massagesElement = massages.map(m => <Massage massage={m.massage}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.massagesItems}>
                {massagesElement}
            </div>

        </div>
    )
}
export default Dialogs;