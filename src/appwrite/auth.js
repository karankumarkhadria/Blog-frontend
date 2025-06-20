import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email, password, name);
            if (userAccount) {
                //call another method
                return this.login({email,password});
            }
            else {
                return userAccount;
            }
        }
        catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try{
           return await this.account.get();
        }
        catch(error){
            console.log("Appwrite service :: getCurrentUser :: error",error);
            
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }
        catch(error){
           console.log("Appwrite service :: logout :: error",error);
        }
    }

}

const authService = new AuthService();

export default authService;

//abb agar hamne kisi din appwrite ki jagha kuch or use karna ho to hame bass constructor me uss service ke hisaab se badlav karna hai

//and createAccount method to baaki puri website me same hi values lega hame bass yhan par kuch changes karne padenge baaki sab jagha pe or koi changes nhi karne padenge