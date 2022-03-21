import { Skeleton } from 'antd';
import React from 'react';

interface Props {
  rows?: number;
}

const LayoutLoading: React.FC<Props> = ({ rows = 10 }) => (
  <Skeleton paragraph={{ rows }} />
);

export default LayoutLoading;
