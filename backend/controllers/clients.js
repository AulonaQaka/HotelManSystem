import {v4 as uuid} from "uuid";

let clients=[];

export const getClients=(req,res)=>{
    res.send(clients);
};

export const createClient= (req,res)=>{
    const client=req.body;

    clients.push({...client,id:uuid()});
    res.send("Client added successfully!");
};

export const getClient=(req,res)=>{
    const singleClient= clients.filter((client)=> client.id === req.params.id);
    res.send(singleClient);
};

export const deleteClient=(req,res)=>{
    clients=clients.filter((client)=> client.id !== req.params.id);
    res.send("Client deleted successfully!");
};

export const updateClient=(req,res)=>{
    const client=clients.find((client)=>client.id===req.params.id);
    client.firstname=req.body.firstname;
    client.lastname=req.body.lastname;
    client.email=req.body.email;
    client.address=req.body.address;
    client.contactnumber=req.body.contactnumber;
    client.dateofbirth=req.body.dateofbirth;
    client.gender=req.body.gender;

    

    res.send("User updated successfully!");
};