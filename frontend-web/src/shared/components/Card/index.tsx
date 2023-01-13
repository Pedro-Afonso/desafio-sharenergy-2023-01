import { IRandomUser } from '../../interfaces'
import './Card.css'

interface ICardProps {
  randomUser: IRandomUser
}
export const Card: React.FC<ICardProps> = ({ randomUser }) => {
  const {
    picture: { medium },
    name: { first, last },
    location: { street, state, city, postcode }
  } = randomUser

  return (
    <article className="card">
      <section>
        <img src={medium} alt={first} />
        <h3>{first + last}</h3>
        <address>
          <p>{street.name + street.number}</p>
          <p>{city}</p>
          <p>{state + '- CEP:' + postcode}</p>
        </address>
      </section>
    </article>
  )
}
