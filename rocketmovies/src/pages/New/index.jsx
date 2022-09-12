import { Container, Form } from "./styles.js";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { RiArrowLeftLine } from 'react-icons/ri';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New( ...rest ) {
  const [movie_tags, setMovieTags] = useState([]);
  const [newMovieTag, setNewMovieTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddMovieTag(){
    setMovieTags(prevState => [...prevState, newMovieTag]);
    setNewMovieTag("");
  }

  function handleRemoveTag(deleted){
    setMovieTags(prevState => prevState.filter(movieTag => movieTag !== deleted));
  }

  async function handleNewNote(){
    if (!title) {
      return alert("Digite o  nome do Filme");
    }

    if (!rating) {
      return alert("Você não informou uma nota para o Filme. Por favor selecione uma nota de 0 a 5.");
    }

    if (newMovieTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique em adicionar ou deixe o campo vazio.");
    }

    await api.post("/movie_notes", {
        title,
        description,
        movie_tags,
        rating
    });

    alert("Filme adicionado com sucesso!");
    navigate(-1);
  }
  
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>

            <ButtonText 
              title="Voltar" 
              icon={RiArrowLeftLine}
              onClick={handleBack}
            />
            <h1>Novo Filme</h1>

          </header>

          <div class="title">
            <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
            />

            <select {...rest} onChange={e => setRating(e.target.value)}>
                <option value="" disabled selected>Sua nota(de 0 a 5)</option>
                <option value="0">0</option>
                <option value="2">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select> 
          </div>
          <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className="tags">
              {
                movie_tags.map((movieTag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={movieTag}
                    onClick={() => handleRemoveTag(movieTag)}
                  />
                ))
              }
                  <NoteItem
                    isNew 
                    placeholder="Nova tag"
                    onChange={e => setNewMovieTag(e.target.value)}
                    value={newMovieTag}
                    onClick={handleAddMovieTag}
                  />
            </div>
          </Section>

          <div class="buttons">
            <Button 
              title="Salvar Filme" 
              onClick={handleNewNote} 
            />
          </div>
        </Form>
      </main>
    </Container>
  )
}