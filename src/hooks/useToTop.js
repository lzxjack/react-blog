import { useEffect } from 'react';

const useToTop = (props, isShowNav) => {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        isShowNav && props.setNavShow(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useToTop;
