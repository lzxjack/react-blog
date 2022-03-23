import { db } from '../cloudBase';

export const setData = (config: {
  DBName: string;
  name: string;
  email: string;
  link: string;
  content: string;
  date: number;
  avatar: string;
  postTitle: string;
  replyId: string;
}) => {
  const { DBName, name, email, link, content, date, avatar, postTitle, replyId } = config;
  return db
    .collection(DBName)
    .add({
      name,
      email,
      link,
      content,
      date,
      avatar,
      postTitle,
      replyId
    })
    .then(() => true)
    .catch(() => false);
};
