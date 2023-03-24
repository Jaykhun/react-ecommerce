import Button from '@/components/UI/Button'
import Input from '@/components/UI/Input'

const UsersHeader = () => {
    return (
        <div className="users__header">
            <Input
                type='search'
                placeholder='Искать...'
            />

            <Button hoverEffect>Добавить</Button>
        </div>
    )
}

export default UsersHeader