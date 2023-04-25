import { MainBody, Maintop } from './index'
import './Main.scss'

const Main = () => {
    return (
        <main className='main'>
            <div className="container">
                <Maintop />
                <MainBody/>
            </div>
        </main>
    )
}

export default Main