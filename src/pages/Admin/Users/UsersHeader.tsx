import { Button, Input } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const UsersHeader = () => {
    const { openAddModal } = useActions()
    const handleAdd = () => {
        openAddModal()
    }
    return (
        <>
            <div className="users__title">Пользователи</div>
            <div className="users__header">
                <Input
                    type='search'
                    placeholder='Искать...'
                />

                <Button hoverEffect handleAction={handleAdd}>Добавить</Button>
            </div>
        </>
    )
}

export default UsersHeader