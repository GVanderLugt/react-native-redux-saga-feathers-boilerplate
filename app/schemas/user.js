import { schema } from 'normalizr';

export const userSchema = new schema.Entity('user', {}, { idAttribute: '_id' });
export const userListSchema = [userSchema];
