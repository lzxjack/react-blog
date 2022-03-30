import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import React from 'react';

import { csdnUrl, githubUrl, QQ_QRCode, weChatQRCode } from '@/utils/constant';

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
      content: <img src={weChatQRCode} style={imgStyle} />
    },
    {
      isLink: false,
      link: '',
      ico: <QqOutlined />,
      content: <img src={QQ_QRCode} style={imgStyle} />
    }
  ];
};
