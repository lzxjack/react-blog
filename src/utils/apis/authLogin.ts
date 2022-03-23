import { auth } from '../cloudBase';

export const authLogin = (adminEmail: string, adminPwd: string) =>
  auth
    .signInWithEmailAndPassword(adminEmail, adminPwd)
    .then(() => true)
    .catch(() => false);
