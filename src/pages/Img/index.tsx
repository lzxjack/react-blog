import useUrlState from '@ahooksjs/use-url-state';
import { useRequest, useSafeState } from 'ahooks';
import React from 'react';

import Layout from '@/components/Layout';
import { DB } from '@/utils/apis/dbConfig';
import { getWhereData } from '@/utils/apis/getWhereData';
import { staleTime } from '@/utils/constant';

import ImgItem from './ImgItem';
import ImgView from './ImgView';
import s from './index.scss';

const Img: React.FC = () => {
  const [query] = useUrlState();
  const { data, loading } = useRequest(getWhereData, {
    defaultParams: [DB.Gallery, { title: query.title }],
    retryCount: 3,
    cacheKey: `Img-${DB.Gallery}-${query.title}`,
    staleTime
  });

  const [viewUrl, setViewUrl] = useSafeState('');
  const [isViewShow, setIsViewShow] = useSafeState(false);

  return (
    <Layout title={query.title} className={s.imgBox} loading={loading}>
      <ImgView viewUrl={viewUrl} isViewShow={isViewShow} setIsViewShow={setIsViewShow} />
      {data?.data[0].pics.map((url: string, index: number) => (
        <ImgItem
          key={index}
          url={url}
          onClick={() => {
            setViewUrl(url);
            setIsViewShow(true);
          }}
        />
      ))}
    </Layout>
  );
};

export default Img;
