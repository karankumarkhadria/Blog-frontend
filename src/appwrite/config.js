import conf from "../conf/conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,content,featuredImage,status,userId
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: createPost :: error",error);
        }
    }

     //slug value yhan par id h jisse match hoga konse document me daalna hai or agar slug ko object me daalunga to bass ek ek karke lena padega usko so maine slug ko alag se likh liya

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }
        catch(error){
            console.log("Appwrite service :: updatePost :: error",error);
        }
    }
    async deletePost({slug}){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        }
        catch(error){
            console.log("Appwrite service :: deletePost :: error",error);
            return false;
        }
    }

    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        }
        catch(error){
            console.log("Appwrite service :: getPost :: error",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        }
        catch(error){
            console.log("Appwrite service :: getPosts :: error",error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file){
        try{
          return  await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
          )
        }
        catch(error){
             console.log("Appwrite service :: uploadFile :: error",error);
            console.log("Bucket ID:", conf.appwriteBucketId)


            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        }
        catch(error){
             console.log("Appwrite service :: deleteFile :: error",error);
            return false;
        }
    }

   getFilePreview(fileId){
    return this.bucket.getFileView(
        conf.appwriteBucketId,
        fileId
    )
   }

}

const service = new Service();

export default service

