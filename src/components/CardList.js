import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Robot Friends</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {robots.map(({ id, name, username, email } = robots) => (
            <Card 
              key={id}
              id={id}
              name={name}
              username={username}
              email={email}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardList;
