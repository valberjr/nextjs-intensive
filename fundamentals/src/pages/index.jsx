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
    </div>
  );
}
