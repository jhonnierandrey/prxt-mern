type playerType = {
    firstName : string,
    lastName : string,
}

interface Props {
    players : playerType[]
    updateCurrentPlayer : any
}

function PlayerList({players, updateCurrentPlayer} : Props){
    return(
        <ul className="collection with-header">
            <li className="collection-header"><h4>Players</h4></li>
            { players.map((player, index) => (
                <a href="#!" onClick={() => updateCurrentPlayer(player)} className="collection-item" key={index}> {player.firstName} {player.lastName}</a>
            ))}
        </ul>
    )
}

export default PlayerList;