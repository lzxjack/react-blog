export const useLinkList = () => {
  const navArr = [
    { id: 0, name: '图库', to: '/gallery' },
    { id: 1, name: '说说', to: '/say' },
    { id: 2, name: '留言', to: '/msg' },
    { id: 3, name: '友链', to: '/link' },
    { id: 4, name: '作品', to: '/show' },
    { id: 5, name: '建站', to: '/log' },
    { id: 6, name: '关于', to: '/about' },
  ];
  const secondNavArr = [
    { id: 0, name: '找文章', to: '/articles' },
    { id: 1, name: '分类', to: '/classes' },
    { id: 2, name: '标签', to: '/tags' },
  ];

  return {
    navArr,
    secondNavArr,
  };
};
