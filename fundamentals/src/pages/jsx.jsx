import Layout from '../components/Layout';

export default function Jsx() {
  const title = <h1>JSX is pretty cool</h1>;

  function subtitle() {
    return <h2>{'Awesome'.toLocaleUpperCase()}</h2>;
  }

  return (
    <Layout title='Using Components'>
      <div>
        {title}
        {subtitle()}
        <p>{JSON.stringify({ name: 'Jessica', age: 30 })}</p>
      </div>
    </Layout>
  );
}
