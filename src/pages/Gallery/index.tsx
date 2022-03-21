import { useRequest } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getData } from '@/utils/apis/getData';
import { staleTime } from '@/utils/constant';

import { Title } from '../titleConfig';
import ImgCard from './ImgCard';
import s from './index.scss';

interface GalleryType {
  _id: string;
  cover: string;
  title: string;
  descr: string;
}

const Gallery: React.FC = () => {
  const { data, loading } = useRequest(getData, {
    defaultParams: [DB.Gallery],
    retryCount: 3,
    cacheKey: DB.Gallery,
    staleTime
  });

  return (
    <Layout title={Title.Gallery} loading={loading} className={s.imgBox}>
      {data?.data.map((item: GalleryType) => (
        <ImgCard
          key={item._id}
          cover={item.cover}
          title={item.title}
          descr={item.descr}
        />
      ))}
    </Layout>
  );
};

export default Gallery;
