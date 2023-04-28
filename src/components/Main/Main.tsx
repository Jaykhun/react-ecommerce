import './Main.scss'
import { MainBody, MainTop } from './index'

const Main = () => {
    return (
        <main className='main'>
            <div className="container">
                <MainTop />
                <MainBody />
            </div>
        </main>
    )
}

export default Main