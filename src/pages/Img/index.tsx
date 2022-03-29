import './index.custom.scss';

import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import { Image } from 'antd';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getWhereData } from '@/utils/apis/getWhereData';
import { staleTime } from '@/utils/constant';

const Img: React.FC = () => {
  const [query] = useUrlState();
  const { data, loading } = useRequest(getWhereData, {
    defaultParams: [DB.Gallery, { title: query.title }],
    retryCount: 3,
    cacheKey: `Img-${DB.Gallery}-${query.title}`,
    staleTime
  });

  return (
    <Layout title={query.title} className='imgsBox' loading={loading}>
      <Image.PreviewGroup>
        {data?.data[0].pics.map((url: string, index: number) => (
          <Image width={360} src={url} key={index} loading='lazy' alt='img' />
        ))}
      </Image.PreviewGroup>
    </Layout>
  );
};

export default Img;
