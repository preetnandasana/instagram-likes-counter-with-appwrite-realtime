import {Client, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("Your Project Endpoint").setProject("Project Id");


export const databases = new Databases(client)

export const appwriteclinet = client




