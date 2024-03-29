import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
            <SearchParams  />
            <SearchParams />
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);