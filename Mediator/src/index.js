class ChatRoom {
    logMessage(user, message) {
        const sender = user.getName();
        console.log(`${new Date().toLocaleDateString()} [${sender}]: ${message}`)
    }
}
class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();

const user1 = new User("John", chatroom);
const user2 = new User("Jane", chatroom);

user1.send("Hi there!")
user2.send("Hey!");

console.log(user1.getName());