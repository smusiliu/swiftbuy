import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import { Container } from 'react-bootstrap'

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <h1> Welcome to SwiftBuy </h1>
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default App


