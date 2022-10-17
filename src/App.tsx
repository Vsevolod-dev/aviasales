import {ReactElement} from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Tickets from "./components/Tickets";

function App(): ReactElement {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className="container">
                    <div className={'main__row'}>
                        <Filters/>
                        <Tickets/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
