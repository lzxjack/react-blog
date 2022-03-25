export const useLinkList = () => {
  const navArr = [
    { name: '图库', to: '/gallery' },
    { name: '说说', to: '/say' },
    { name: '留言', to: '/msg' },
    { name: '友链', to: '/link' },
    { name: '作品', to: '/show' },
    { name: '建站', to: '/log' },
    { name: '关于', to: '/about' }
  ];
  const secondNavArr = [
    { name: '找文章', to: '/articles' },
    { name: '分类', to: '/classes' },
    { name: '标签', to: '/tags' }
  ];

  const mobileNavArr = [
    { name: '主页', to: '/' },
    { name: '文章', to: '/articles' },
    { name: '分类', to: '/classes' },
    { name: '标签', to: '/tags' },
    { name: '图库', to: '/gallery' },
    { name: '说说', to: '/say' },
    { name: '留言', to: '/msg' },
    { name: '友链', to: '/link' },
    { name: '作品', to: '/show' },
    { name: '建站', to: '/log' },
    { name: '关于', to: '/about' }
  ];

  return {
    navArr,
    secondNavArr,
    mobileNavArr
  };
};
