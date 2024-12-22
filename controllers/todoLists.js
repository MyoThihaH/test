import ToDoLists from "../models/todoLists.js"


export const getTodoLists = async (req, res) => {
    try {
        const lists =await ToDoLists.find();
        res.status(200).send(lists)
    } catch (error) {
        console.log(error.message);
    }
    
}

export const postTodoLists = (req, res) => {
    const todos = req.body;
    try {
       const lists =  ToDoLists(todos);
       lists.save((err) => {
           if(err) {
            console.log(err.message);
           } else {
            res.status(201).json(lists);
           }
           
       })

    } catch (error) {
        console.log(error.message);
    }
}

export const updateList = (req, res) => {
    try {
       const data =  req.body;
       ToDoLists.updateOne({_id: data._id},data,(err) => {
        if(err) {
            res.status(404).send(err.message);
        } else {
            res.status(201).json(data);
        }
       })
    } catch (err) {
        console.log(err.message);
    }
}     

export const deleteList = (req, res) => {
   const { _id } = req.body;
   ToDoLists.deleteOne({_id: _id}, (err) => {
       if(err) {
           res.status(404).send(err.message);
       } else {
           res.status(204).send();
       }
   })
}

export const allComplete = (req, res) => {
    ToDoLists.updateMany({completed:false},{completed: true}, (err) => {
        if(err){
            console.log(err.message);
        } else {
            res.status(201).send();
        }
    })
}

export const allUnComplete = (req, res) => {
    ToDoLists.updateMany({completed:true},{completed: false}, (err) => {
        if(err){
            console.log(err.message);
        } else {
            res.status(201).send();
        }
    })
}

export const clearComplete = (req, res) => {
    ToDoLists.deleteMany({completed: true},(err) => {
        if(err) {
            console.log(err.message);
        } else {
            res.status(201).send();
        }
    })
}