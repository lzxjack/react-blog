import { useRequest } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import s from './index.scss';

interface GalleryType {
  _id: string;
  cover: string;
  title: string;
  descr: string;
}

const Gallery: React.FC = () => {
  const navigate = useNavigate();

  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Gallery],
    retryCount: 3,
    cacheKey: DB.Gallery,
    staleTime
  });

  return (
    <Layout title={Title.Gallery} loading={loading} className={s.imgBox}>
      {data?.data.map((item: GalleryType) => (
        <div
          key={item._id}
          style={{ backgroundImage: `url(${item.cover})` }}
          onClick={() => navigate(`/img?title=${encodeURIComponent(item.title)}`)}
          className={s.item}
        >
          <div className={s.title}>
            <span>{item.title}</span>
          </div>
          <div className={s.descr}>{item.descr}</div>
          <div className={s.mask} />
        </div>
      ))}
    </Layout>
  );
};

export default Gallery;
