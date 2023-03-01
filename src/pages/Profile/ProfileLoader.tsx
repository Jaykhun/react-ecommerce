import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={1220}
        height={200}
        viewBox="0 0 1220 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="14" y="26" rx="0" ry="0" width="163" height="16" />
        <rect x="203" y="26" rx="0" ry="0" width="67" height="16" />
        <rect x="17" y="113" rx="0" ry="0" width="163" height="16" />
        <rect x="205" y="112" rx="0" ry="0" width="67" height="16" />
        <rect x="15" y="141" rx="0" ry="0" width="163" height="16" />
        <rect x="206" y="141" rx="0" ry="0" width="67" height="16" />
        <rect x="14" y="54" rx="0" ry="0" width="163" height="16" />
        <rect x="203" y="54" rx="0" ry="0" width="67" height="16" />
        <rect x="15" y="81" rx="0" ry="0" width="163" height="16" />
        <rect x="205" y="86" rx="0" ry="0" width="67" height="16" />
    </ContentLoader>
)

export default MyLoader