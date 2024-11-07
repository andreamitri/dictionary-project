import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
            This project was coded by Andrea Mitri and is{" "}
            <a
              href="https://github.com/andreamitri/react-weather-app"
              target="blank"
            >
              open-sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
