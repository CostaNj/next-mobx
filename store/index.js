import { observable, action } from "mobx";
import { useStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export const store = observable({
    name: '',
    lastname: '',
    age: null,

    changeName(newName) {
        this.name = newName
    },

    changeLastname(newLastname) {
        this.lastname = newLastname
    },

    changeAge(newAge) {
        this.age = newAge
    },

    updateStore({ name, lastname, age }) {
        this.changeName(name)
        this.changeLastname(lastname)
        this.changeAge(age)
    }

}, {
    changeName: action,
    changeLastname: action,
    changeAge: action,
    updateStore: action
})
