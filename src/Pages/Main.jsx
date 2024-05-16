import Content from '../Components/Content/Content';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Page from '../Components/Page/Page';

function Main() {
    return (
        <Page>
            <Header />
            <Content>
                {localStorage.getItem('token')}
            </Content>
            <Footer />
        </Page>
    )
}
export default Main;