import styled from "styled-components";
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Sidebar() {
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
        </Container>
    )
}

export default Sidebar;

const IconsContainer = styled.div``;

const Container = styled.div``;

const Header = styled.div``;

const UserAvatar = styled(Avatar)`


`;