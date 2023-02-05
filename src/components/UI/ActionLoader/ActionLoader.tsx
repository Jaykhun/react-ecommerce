import React from 'react';
import ContentLoader from "react-content-loader";
import "./ActionLoader.scss";

const ActionLoader = () => {
    return (
        <>
            <div className="action-loader">
                <ContentLoader
                    viewBox="0 0 350 160"
                    backgroundColor="transparent"
                >
                    <circle cx="150" cy="86" r="8"/>
                    <circle cx="194" cy="86" r="8"/>
                    <circle cx="238" cy="86" r="8"/>
                </ContentLoader>
            </div>
        </>
    );
};

export default ActionLoader;