const Card = ({ data, className, ...props }) => <article {...props} className={'flex flex-column items-baseline content-start flex-wrap br2 ba dark-gray b--black-10 center pointer card ' + className}>
  <style jsx>{`
    .card {
      transition: background-color 0.3s ease-in-out, border-color 0.6s ease-in-out;
    }

    .card img {
      transition: filter 0.3s ease-in-out;
      filter: none;
    }

    .card.unselected img {
      filter: saturate(0.1);
    }
  `}</style>
  <div className='dt w-100 mt1 pa2 ph3-ns pb3-ns'>
    <div className='dtc'>
      <h1 className='f5 f4-ns mv0'>{data.title}</h1>
    </div>
  </div>
  <div className='flex-auto'>
    <img src={data.image !== '' ? data.image : 'http://placekitten.com/g/600/300'} className='overflow-y-hidden dib br2 mw-100 mh-100' alt={`A ${data.title.toLowerCase()} catgirl`} />
  </div>
  <p className='f7 lh-copy self-end measure mt2 mid-gray tj pa2 ph3-ns pb3-ns'>
    {data.description}
  </p>
</article>

export default Card
