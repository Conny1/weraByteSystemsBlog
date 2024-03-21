import { connection } from "./db";


 export const POSTRequest= async ( q:string, reqBody:any )=>{
 return   await new Promise((resolve, reject) => {
        connection.query(q, [reqBody], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });

}