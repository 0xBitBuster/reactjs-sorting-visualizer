import SortingChart from "./components/SortingChart";
import SortingProvider from "./contexts/SortingContext";

function App() {
    return (
        <SortingProvider>
            <div className="container mx-auto px-4">
                <SortingChart />
            </div>
        </SortingProvider>
    );
}

export default App;
