//Schema o Esquema de como se hace la base de datos en MongoDb
import { Schema, Document } from 'mongoose';

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  
}

export const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});