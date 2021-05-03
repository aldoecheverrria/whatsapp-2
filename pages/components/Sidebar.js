import styled from "styled-components";
import { Avatar, IconButton, Button } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


function Sidebar() {

    const createChat = () => {
        const input = prompt("Por favor introduce tu correo electrónico del usuario con quien quieres platicar");
        if (!input) return null;

        if (EmailValidator.validate(input)){
            //this is were we need to add the chat into the DB 'chats' collection
        }
    };

    return (
        <Container>
            <Header>
               <UserAvatar/>
            <IconsContainer>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
                
            </IconsContainer>
            </Header>
            <Search>
                <SearchIcon/>
                <SearchInput placeholder="Buscar en chats..."/>
            </Search>
            
            <SidebarButton onClick={createChat} >Iniciar nuevo Chat</SidebarButton>
            {/*List of chats*/}
        </Container>
    )
}

export default Sidebar;

const IconsContainer = styled.div``;

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 2px;
`;

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    }
    
`;

const SearchInput = styled.input`
    border: none;
    outline-style: solid;
    outline-width: 0;
    flex: 1;
`;

const Container = styled.div``;

const Header = styled.div`
    display: flex;
    position: sticky;
    top: sticky;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;