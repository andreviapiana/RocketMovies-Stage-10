import { Container, Content } from "./styles.js";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { RiArrowLeftLine, RiTimeLine } from 'react-icons/ri';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { StarsRating } from "../../components/StarsRating";
import { Button } from "../../components/Button";

export function Details() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm('Deseja realmente remover o filme?')

    if(confirm){
      await api.delete(`/movie_notes/${params.id}`) 
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchMovieNote() {
      const response = await api.get(`/movie_notes/${params.id}`);
      setData(response.data);
    }

    fetchMovieNote();
  }, []);

  
  
  return(
    <Container>
      <Header />
      {
        data &&
          <main>
            <Content>
              <ButtonText 
                title="Voltar" 
                icon={RiArrowLeftLine}
                onClick={handleBack}
              />

              <div class="starsDetails">
                <h2>{data.title}</h2>
                <StarsRating rating={data.rating}/>
 
              </div>

              <div>
                <img src={avatarUrl} alt="Foto do usuário" />
                <span>Por {user.name}</span>
                <RiTimeLine />
                <span>{data.created_at}</span>
              </div> 

              {
                data.movie_tags &&
                  <div class="tags">
                    {
                      data.movie_tags.map(tag => (
                        <Tag
                          key={String(tag.id)}
                          title={tag.name}
                        />
                      ))
                    }
                  </div>
              }

              <p>
                {data.description}
              </p>

              <div class="buttons">
                <Button 
                  title="Excluir filme"
                  onClick={handleRemove}
                />
              </div>
            </Content>
          </main>
      }
    </Container>
  )
}