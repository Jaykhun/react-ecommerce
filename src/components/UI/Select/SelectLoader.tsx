import React from 'react';
import ContentLoader from "react-content-loader";

const SelectLoader = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 976 90"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="20" rx="6" ry="6" width="895" height="58" />
        </ContentLoader>
    );
};

export default SelectLoader;