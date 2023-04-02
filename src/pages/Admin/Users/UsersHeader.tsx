import { Button } from '@/components/UI'
import { useActions } from '@/hooks/useActions'

const UsersHeader = () => {
    const { openAddModal } = useActions()
    const handleAdd = () => openAddModal()

    return (
        <>
            <div className="users__title">Пользователи</div>
            <div className="users__header">
                <div className="users__search">
                    <input
                        type='search'
                        placeholder='Искать...'
                        className='input__style'
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