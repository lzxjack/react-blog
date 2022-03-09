import React from 'react';
import { Button } from 'antd';
import { useTitle } from 'ahooks';

const Admin: React.FC = () => {
  useTitle('Admin');
  return <Button type='primary'>按钮</Button>;
};

export default Admin;
