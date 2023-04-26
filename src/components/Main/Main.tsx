import { MainBody, MainTop } from './index'
import './Main.scss'

const Main = () => {
    return (
        <main className='main'>
            <div className="container">
                <MainTop />
                <MainBody/>
            </div>
        </main>
    )
}

export default Main