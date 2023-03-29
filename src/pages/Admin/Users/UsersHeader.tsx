import { Button, Input } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const UsersHeader = () => {
    const { openAddModal } = useActions()
    const handleAdd = () => openAddModal()

    return (
        <>
            <div className="users__title">Пользователи</div>
            <div className="users__header">
                <div className="users__search">
                    <Input
                        type='search'
                        placeholder='Искать...'
                    />
                </div>

                <div className='users__add' onClick={handleAdd}>
                    <Button hoverEffect>Добавить</Button>
                </div>
            </div>
        </>
    )
}

export default UsersHeader