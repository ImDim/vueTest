export default class Storage {
    constructor() {
    }
    get myMessage() {
        return localStorage.getItem('msg');
      }

    set myMessage(newValue) {
        localStorage.setItem('msg', newValue);
    }
}
