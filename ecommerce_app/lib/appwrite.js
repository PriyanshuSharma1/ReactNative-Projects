import { Client, Account, ID } from "react-native-appwrite";

const appwriteConfig = {
  endpoint: "http://localhost:3000/v1",
  project: "678003c4002622b59e07",
  platform: "com.priyu.swe",
  databaseId: "678007620029a895d488",
  usercolledctionId: "678007bf0016e37080eb",
  vidscollectionId: "678007e90039430f6d1b",
  storageId: "678009a5002db964b1b8",
};
const client = new Client()
  .setProject(appwriteConfig.project)
  .setEndpoint(appwriteConfig.endpoint)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);

export const createUser = async (email, password, name) => {
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

export default appwriteConfig;
