import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Landing, Page, Content } from './components';

function Main() {

    const navigate = useNavigate();
    const [stateBurgerMenu, setStateBurgerMenu] = useState(false);

    const navigateToRegisterPage = () => {
        navigate('/register');
    }

    return (
        <Page>
            <Header stateBurgerMenu={stateBurgerMenu} setStateBurgerMenu={setStateBurgerMenu} />
            <Content>
                <Landing navigate={navigateToRegisterPage} />
            </Content>
            <Footer />
        </Page>
    )
}
export default Main;