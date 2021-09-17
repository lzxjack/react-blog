import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Pie } from '@ant-design/charts';
import './index.css';

const Chart = props => {
    const [classData, setClassData] = useState([]);
    const pieConfig = {
        appendPadding: 30,
        autoFit: true,
        data: classData,
        angleField: 'count',
        colorField: 'className',
        radius: 0.8,
        legend: false,
        label: {
            type: 'outer',
            autoRotate: false,
            content: '{name} {percentage}',
            style: {
                fontSize: 16,
                fill: '#fff',
            },
        },
        interactions: [
            { type: 'pie-legend-active' },
            { type: 'element-active' },
            { type: 'tooltip' },
        ],
        pieStyle: {
            lineWidth: 0,
        },
    };
    // 整理饼图需要的数据格式
    useEffect(() => {
        // classes分类的数组
        const CLASSES = props.classes
            .filter(item => item.count !== 0)
            .map(item => ({
                className: item.class,
                count: item.count,
            }));
        // 求有分类的文章的数目
        let articleHadClass = 0;
        const len = CLASSES.length;
        for (let i = 0; i < len; i++) {
            articleHadClass += CLASSES[i].count;
        }
        // articlesNoClassNum为未分类的文章数目：文章总数-有分类的文章的数目
        const articlesNoClassNum = props.articles.length - articleHadClass;
        if (articlesNoClassNum !== 0) {
            // 有未分类的文章
            // 类名为“未分类”
            const articleNoClass = {
                className: '未分类',
                count: articlesNoClassNum,
            };
            // 未分类的文章追加到数组中
            const articlesData = [...CLASSES, articleNoClass];
            setClassData(articlesData);
        } else {
            // 没有未分类的文章
            setClassData(CLASSES);
        }
    }, [props.classes, props.articles]);

    return (
        <div className="Chart-box">
            <Pie {...pieConfig} />
        </div>
    );
};

export default connect(
    state => ({
        classes: state.classes,
        articles: state.articles,
    }),
    {}
)(Chart);
