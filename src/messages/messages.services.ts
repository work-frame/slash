import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;
   
    constructor() {
        // Service is created on its own dependence
        //dont do this on real apps 
        this.messagesRepo = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}