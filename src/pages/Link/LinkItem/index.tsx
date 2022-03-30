import classNames from 'classnames';
import React from 'react';

import { smallLoadingUrl } from '@/utils/constant';
import { useLazyImg } from '@/utils/hooks/useLazyImg';

import s from './index.scss';

interface Props {
  link?: string;
  avatar?: string;
  name?: string;
  descr?: string;
}

const LinkItem: React.FC<Props> = ({ link, avatar, name, descr }) => {
  const { imgRef, imgUrl } = useLazyImg(avatar!, smallLoadingUrl);

  return (
    <div className={s.item}>
      <a href={link} rel='noreferrer' target='_blank' className={s.link}>
        <div ref={imgRef} className={s.left}>
          <img
            src={imgUrl}
            className={classNames({
              [s.avatar]: imgUrl !== smallLoadingUrl,
              [s.loading]: imgUrl === smallLoadingUrl
            })}
          />
        </div>
        <div className={s.right}>
          <div className={s.title}>{name}</div>
          <div className={s.descr}>{descr}</div>
        </div>
      </a>
    </div>
  );
};

export default LinkItem;
