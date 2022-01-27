import Navigator from '../components/Navigator';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100vh',
      }}
    >
      <Navigator text='Stylish' destiny='/stylish' />
      <Navigator text='Example' destiny='/example' color='#9400d3' />
      <Navigator text='JSX' destiny='/jsx' color='crimson' />
      <Navigator text='Navigation #01' destiny='/navigation' color='green' />
      <Navigator
        text='Navigation #02'
        destiny='/client/sp-01/123'
        color='blue'
      />
      <Navigator text='Static Content' destiny='/static' color='#fa054a' />
    </div>
  );
}
