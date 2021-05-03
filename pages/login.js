import Head  from 'next/head';
import styled from 'styled-components';


function Login() {
    return (
        <Container>
            <Head>
                <title>Entrar</title>
            </Head>
        <LoginContainer>
            <Logo/>
        </LoginContainer>
        </Container>

        
    )
}

export default Login;

const Container = styled.div``;

const LoginContainer = styled.div``;

const Logo = styled.div``;