import { useNavigate } from 'react-router-dom';
import Content from '../Components/Content/Content';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Landing from '../Components/Landing/Landing';
import Page from '../Components/Page/Page';
import { useState } from 'react';

function Main() {

    const navigate = useNavigate();
    const [stateBurgerMenu, setStateBurgerMenu] = useState(false);

    const navigateToRegisterPage = () => {
        navigate('/register');
    }

    return (
        <Page>
            <Header stateBurgerMenu={stateBurgerMenu} setStateBurgerMenu={setStateBurgerMenu}/>
            <Content>
                <Landing navigate={navigateToRegisterPage} />
            </Content>
            <Footer />
        </Page>
    )
}
export default Main;