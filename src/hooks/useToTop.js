import { useEffect } from 'react';

const useToTop = setNavShow => {
    // 返回顶部
    useEffect(() => {
        window.scrollTo(0, 0);
        setNavShow(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useToTop;
