import React from 'react';
import { useNavigate } from 'react-router-dom';

import s from './index.scss';

interface Props {
  cover?: string;
  title?: string;
  descr?: string;
}

const ImgCard: React.FC<Props> = ({ cover, title, descr }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      onClick={() => navigate(`/img?title=${encodeURIComponent(title!)}`)}
      className={s.imgItem}
    >
      <div className={s.title}>
        <span>{title}</span>
      </div>
      <div className={s.descr}>{descr}</div>
      <div className={s.mask} />
    </div>
  );
};

export default ImgCard;
