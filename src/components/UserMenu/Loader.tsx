import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={50}
        height={50}
        viewBox="0 0 50 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="6" y="6" rx="6" ry="6" width="50" height="50" />
    </ContentLoader>
)

export default MyLoader