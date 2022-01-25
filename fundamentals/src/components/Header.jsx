export default function Header(props) {
    // props is readonly
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}
