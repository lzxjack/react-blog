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

export const useOption = (classes: ClassType[], artSum: number, mode: number) => {
  const data = getChartData(classes!, artSum!);

  // const labelColor = ['#fff', 'rgb(53, 53, 53)', 'rgb(53, 53, 53)'];
  const labelColor = ['rgb(53, 53, 53)', 'rgb(53, 53, 53)', 'rgb(53, 53, 53)'];
  const backgroundColor = [
    'rgb(194, 209, 223)',
    'rgb(194, 209, 223)',
    'rgb(194, 209, 223)'
  ];

  return {
    tooltip: {
      trigger: 'item',
      backgroundColor: backgroundColor[mode],
      borderColor: backgroundColor[mode],
      textStyle: {
        color: labelColor[mode]
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
          color: labelColor[mode],
          fontSize: 18,
          fontFamily: 'dengxian'
        }
      }
    ]
  };
};
