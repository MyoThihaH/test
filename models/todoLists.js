import mongoose from 'mongoose';

const todoLists = mongoose.Schema({
    description: {type: String},
    color: {type: String, default: ""},
    completed: { type: Boolean, default: 0},
    createdAt: { type: Date, default: new Date()}
});

const ToDoLists = mongoose.model('ToDoLists', todoLists);

export default ToDoLists;