import { Container } from './styles'
import { StarsRating } from '../StarsRating'
import { MovieTag } from '../MovieTag'

export function MovieCard({ data, ...rest }) {
  return (
    <Container {...rest}>
        <h2>{data.title}</h2>
      
        <StarsRating rating={data.rating} />
      
        <p>{data.description}</p>

        <div>
            {data.tags.map((tag) => (
                <MovieTag key={tag.id} title={tag.name} />
            ))}
        </div>

    </Container>
  )
}