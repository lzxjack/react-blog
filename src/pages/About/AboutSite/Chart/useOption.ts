import base from '@/styles/base.scss';

import { ClassType } from '..';

const getChartData = (classes: ClassType[], artSum: number) => {
  let sum = 0;
  const res = classes.map(obj => {
    sum += obj.count;
    return { name: obj.class, value: obj.count };
  });
  const leave = artSum - sum;
  leave &&
    res.push({
      name: '未分类',
      value: leave
    });
  return res;
};

export const useOption = (classes: ClassType[], artSum: number) => {
  const data = getChartData(classes!, artSum!);
  return {
    tooltip: {
      trigger: 'item',
      backgroundColor: base.themeColor2,
      borderColor: base.themeColor2,
      textStyle: {
        color: base.textColor
      }
    },
    series: [
      {
        type: 'pie',
        radius: '88%',
        height: '400px',
        data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
        label: {
          color: base.textColor,
          fontSize: 18,
          fontFamily: 'dengxian'
        }
      }
    ]
  };
};
