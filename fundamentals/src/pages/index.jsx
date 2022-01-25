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
      <Navigator text='Estiloso' destiny='/estiloso' />
      <Navigator text='Example' destiny='/example' color='#9400d3' />
      <Navigator text='JSX' destiny='/jsx' color='crimson' />
    </div>
  );
}
