import { Schema} from 'mongoose'

export const TituloSchema = new Schema({
name: String,
description: String, 
imageURL: String,
createAt: {
type: Date,
default: Date.now

}



});

