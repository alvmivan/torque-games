import './App.css';
import {TorqueTittle} from "./TorqueTittle";
import {GameCard} from "./GameCard";

let games = [
    {
        tittle: "Paper Protect",
        imageUrl: "https://img.itch.zone/aW1nLzMxNzgzMzUucG5n/original/%2BJk2Lt.png",
        url : "https://torquegames.itch.io/paper-protect"
    },
    {
        tittle: "One Rebel Army (demo)",
        imageUrl: "https://img.itch.zone/aW1hZ2UvNTkxNDY0LzMxMjYzOTkucG5n/original/4Lc73c.png",
        url : "https://torquegames.itch.io/one-rebel-army"
    },
    {
        tittle: "Polarize",
        imageUrl: "https://img.itch.zone/aW1nLzI2NzU4NjUucG5n/315x250%23c/fAZJi5.png",
        url : "https://torquegames.itch.io/polarize"
    },

]

function App() {
    return (
        <div className={"appMain"}>
            <TorqueTittle/>
            <div style={{
                position : "absolute",
                display : "flex",
                columnCount : 2,
                top : "30%"
            }}>

                {games.map(g=><GameCard data={g}/>)}
            </div>
        </div>
    );
}

export default App;
