import './index.css';

const Footer = () => {
  const arr = ['React', 'Redux', 'AntD', 'CloudBase'];
  return (
    <footer>
      <span>
        个人博客系统
        <a
          href='https://github.com/lzxjack/blog-show'
          target='_blank'
          rel='noreferrer'
          className='icp'
        >
          「源代码」
        </a>
      </span>
      <span>
        <a
          href='https://beian.miit.gov.cn/#/Integrated/index'
          target='_blank'
          rel='noreferrer'
          className='icp'
        >
          浙ICP备2020043821号-1
        </a>
      </span>
      <span>
        {arr.map((item, index) => (
          <span className='site-frame theme-color common-hover' key={index}>
            {item}
          </span>
        ))}
      </span>
    </footer>
  );
};

export default Footer;
