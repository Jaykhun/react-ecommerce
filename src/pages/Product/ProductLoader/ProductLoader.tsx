import ContentLoader from "react-content-loader"

const ProductLoader = () => {
    return (
        <ContentLoader
            speed={2}
            viewBox="0 0 476 490"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="29" rx="6" ry="6" width="280" height="265"/>
            <rect x="0" y="309" rx="6" ry="6" width="220" height="19"/>
            <rect x="0" y="343" rx="6" ry="6" width="140" height="17"/>
            <rect x="0" y="380" rx="6" ry="6" width="138" height="38"/>
            <rect x="198" y="380" rx="6" ry="6" width="80" height="38"/>
            <rect x="0" y="430" rx="6" ry="6" width="280" height="47"/>
        </ContentLoader>
    );
};

export default ProductLoader;