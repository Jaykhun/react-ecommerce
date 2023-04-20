import { AddAttribute, EditAttribute, FetchAttribute } from '@/models/attributeTypes'
import categoryApi from '../category'

export const attributeApi = categoryApi.injectEndpoints({
    endpoints: build => ({
        getCategoryAttributes: build.query<FetchAttribute[], number>({
            query: (categoryId) => `categories/${categoryId}/attributes`
        }),
        getSingleAttribute: build.query<FetchAttribute, number>({
            query: (id) => `attributes/${id}`
        }),
        addAttribute: build.mutation<FetchAttribute, AddAttribute>({
            query: (attribute) => ({
                url: 'attributes',
                method: 'POST',
                body: attribute
            })
        }),
        addAttributeVariant: build.mutation<FetchAttribute, number>({
            query: (attributeId) => ({
                url: `attributes/${attributeId}/variants`,
                method: 'POST',
                body: attributeId
            })
        }),
        editAttribute: build.mutation<FetchAttribute, { data: EditAttribute, id: number }>({
            query: (attribute) => ({
                url: `attributes/${attribute.id}`,
                method: 'PUT',
                body: attribute.data
            })
        }),
        deleteAttribute: build.mutation<void, number>({
            query: (id) => ({
                url: `attributes/${id}`,
                method: 'DELETE'
            })
        })
    })
})