import { useServiceActions } from '@/hooks/useServiceActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'

const SearchModal = () => {
    const { handleSearchModal } = useServiceActions()
    const { isSearchModalOpen } = useTypedSelector(state => state.menuSlice)
    

    return (
        <div>SearchModal</div>
    )
}

export default SearchModal