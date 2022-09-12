import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MovieCard } from '../../components/MovieCard'
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleMovieDetails(id) {
      navigate(`/details/${id}`)
    }
  
    useEffect(() => {
      async function fetchMovieNotes() {
        const response = await api.get(`/movie_notes?title=${search}`);
        setMovies(response.data);
      }
  
      fetchMovieNotes()
    }, [search])

    return (
        <Container>

            <Header onChange={e => setSearch(e.target.value)}></Header>

            <main>
              <Content>
                <div className="header">
                  <h1>Meus filmes</h1>
                  <Link to="/new">
                    <Button icon={FiPlus} title="Adicionar filme" />
                  </Link>
                </div>

                { movies &&
                  movies.map((movie) => (
                    <MovieCard
                      key={String(movie.id)} 
                      data={movie}
                      onClick={() => handleMovieDetails(movie.id)}
                    />
                  ))
                }

              </Content>
            </main>

        </Container>
    );
}
