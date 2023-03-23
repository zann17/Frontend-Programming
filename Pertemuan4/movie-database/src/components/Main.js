import Hello from "./Hello";

/**
 * Membuat component Main.
 * Component Main menampung content utama.
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

export default Main;