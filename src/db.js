import mongoose from "mongoose";    

export const connectDB= async () => {
    try{
        //await mongoose.connect("mongodb://localhost/merndb");
        await mongoose.connect ("mongodb+srv://<username>:<password>@clus.nrgvdcg.mongodb.net/?retryWrites=true&w=majority&appName=Clus");
        console.log(">>> DB logró conectarse aqui");
    } catch(error){
        console.log("error");
    }
};