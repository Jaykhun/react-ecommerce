import ContentLoader from "react-content-loader";

const CategoriesLoader = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 499 160"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="10" rx="6" ry="6" width="410" height="31" />
            <rect x="448" y="9" rx="6" ry="6" width="50" height="34" />
            <rect x="449" y="54" rx="6" ry="6" width="50" height="34" />
            <rect x="0" y="99" rx="6" ry="6" width="410" height="31" />
            <rect x="450" y="97" rx="6" ry="6" width="50" height="34" />
            <rect x="0" y="55" rx="6" ry="6" width="410" height="31" />
        </ContentLoader>
    );
};

export default CategoriesLoader;