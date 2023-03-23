/**
 * Membuat component Header.
 * Component Header menampilkan navigasi.
 */
function Header() {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

/**
 * Membuat component Main.
 * Component Main menampung konten utama.
 */
function Main() {
  return (
      <main>
          {/**
           * Mengirim props ke component Hello.
           * nama props: name,jurusan
          */}
          <Hello name="Fauzan" jurusan ="Informatika" />
          <Hello name="mikel" jurusan ="Bisnis Digital" />
          <Hello name="Hannah" jurusan ="Sistem Informasi" />
          <Hello name="Jonas" jurusan ="Hukum" />
          <Hello name="Martha" jurusan ="Informatika" />
      </main>
  );
}


/**
 * Membuat component Footer.
 * Component Footer menampilkan footer website.
 * @returns
 */
function Footer(){
  return (
      <footer>
          <h2>Copyright @fauzanrhmn</h2>
          <p> Website ini dibuat dengan ReactJS</p>
      </footer>
  );
}

/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 *
 */
function Hello(props) {
  // Melakukan destructing props (object)
  const { name, jurusan} = props;

  return (
    <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - {jurusan}</p>
    </div>
  );
}

/**
 * Membuat component App.
 * Component utama yang menampung components lain.
 */
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);