import {Document} from 'mongoose'

export interface Titulo extends Document {
readonly name: string;
readonly description:  string;
readonly imageURL: string;
readonly createAt: Date;



}