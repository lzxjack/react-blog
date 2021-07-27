import { useEffect } from 'react';

const useScript = (url1, url2) => {
    // 顺序引入两个外部js文件
    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = url1;
        script1.async = false;
        document.body.appendChild(script1);

        const script2 = document.createElement('script');
        script2.src = url2;
        script2.async = false;
        document.body.appendChild(script2);
        return () => {
            document.body.removeChild(script2);
            document.body.removeChild(script1);
        };
    }, [url1, url2]);
};

export default useScript;
