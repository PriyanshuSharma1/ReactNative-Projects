import { Client, Account, ID } from "react-native-appwrite";

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "678003c4002622b59e07",
  platform: "com.priyu.swe",
  databaseId: "678007620029a895d488",
  usercolledctionId: "678007bf0016e37080eb",
  vidscollectionId: "678007e90039430f6d1b",
  storageId: "678009a5002db964b1b8",
};
const client = new Client();
client
  .setProject(appwriteConfig.projectId)
  .setEndpoint(appwriteConfig.endpoint)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error("account already exists");

    const avatarUrl = avatars.getInitials(username);
    console.log(newAccount, avatarUrl);
    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );
    console.log(newUser);
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export default appwriteConfig;
