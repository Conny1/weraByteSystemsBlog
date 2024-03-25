import { connection } from "./db";

export const POSTRequest = async (q: string, reqBody: any[]) => {
  return await new Promise((resolve, reject) => {
    connection.query(q, reqBody, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const GETRequest = async (q: string) => {
  return await new Promise((resolve, reject) => {
    connection.query(q, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const DELRequest = async (q: string) => {
  return await new Promise((resolve, reject) => {
    connection.query(q, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};
