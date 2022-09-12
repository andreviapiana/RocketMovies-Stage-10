import { Container, Profile, Logo, Search } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { ButtonText } from "../../components/ButtonText";
import { Link } from "react-router-dom";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api';

export function Header({ onChange, ...rest}) {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


    return (
        <Container>
            
            <Logo>
                <div>
                    <a href="/">
                        <h1>RocketMovies</h1>
                    </a>
                </div>
            </Logo>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo título" 
                    icon={FiSearch} 
                    onChange={onChange}
                />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
            
                    <Link to="/">
                        <ButtonText title="sair" onClick={signOut}/>
                    </Link>
                </div>

                <img
                src={avatarUrl}
                alt={user.name}
                />

            </Profile>          
        </Container>
    );
}