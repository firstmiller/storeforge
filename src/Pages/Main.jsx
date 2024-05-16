import { useNavigate } from 'react-router-dom';
import Content from '../Components/Content/Content';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Landing from '../Components/Landing/Landing';
import Page from '../Components/Page/Page';

function Main() {
    const navigate = useNavigate();
    const navigateToRegisterPage = () => {
        navigate('/register');
    }
    return (
        <Page>
            <Header />
            <Content>
                <Landing navigate={navigateToRegisterPage}/>
            </Content>
            <Footer />
        </Page>
    )
}
export default Main;