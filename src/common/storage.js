export default class Storage {
    get myMessage() {
        return localStorage.getItem('msg');
      }
    
    set myMessage(newValue) {
        localStorage.setItem('msg', newValue);
    }
}