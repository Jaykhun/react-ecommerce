import React from 'react';
import ContentLoader from "react-content-loader"

const Loader = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 576 390"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="5" rx="3" ry="3" width="144" height="14" />
            <rect x="0" y="30" rx="6" ry="6" width="250" height="110" />
            <rect x="293" y="5" rx="6" ry="6" width="239" height="314" />
            <rect x="2" y="150" rx="4" ry="4" width="111" height="18" />
            <rect x="0" y="180" rx="4" ry="4" width="186" height="19" />
            <rect x="120" y="210" rx="4" ry="4" width="83" height="10" />
            <rect x="0" y="210" rx="4" ry="4" width="83" height="10" />
            <rect x="120" y="230" rx="4" ry="4" width="83" height="10" />
            <rect x="0" y="230" rx="4" ry="4" width="83" height="10" />
        </ContentLoader>
    );
};

export default Loader;