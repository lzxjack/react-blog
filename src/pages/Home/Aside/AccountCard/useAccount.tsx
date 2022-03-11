import React from 'react';
import { GithubOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons';
import { weChatQRCode, QQ_QRCode, githubUrl, csdnUrl } from '@/utils/constant';
import Csdn from './Csdn';

export const useAccount = () => {
  const imgStyle = { width: '120px', height: '120px' };

  return [
    {
      isLink: true,
      link: githubUrl,
      ico: <GithubOutlined />,
      content: null
    },
    {
      isLink: true,
      link: csdnUrl,
      ico: <Csdn />,
      content: null
    },
    {
      isLink: false,
      link: '',
      ico: <WechatOutlined />,
      content: <img src={weChatQRCode} alt='WeChat' style={imgStyle} />
    },
    {
      isLink: false,
      link: '',
      ico: <QqOutlined />,
      content: <img src={QQ_QRCode} alt='QQ' style={imgStyle} />
    }
  ];
};
