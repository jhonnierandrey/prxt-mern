type playerType = {
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string
    strength?: string,
    endurance?: string,
    team?: string
}


interface Props {
    player : playerType
}

function PlayerSingle({player} : Props){
    return(
        <div className="row">
            <div className="col s12">
            <div className="card">
                <div className="card-image">
                    <img src="soccer.jpeg" alt="" />
                    <span className="card-title">{player.firstName} {player.lastName}</span>
                </div>
                <div className="card-content">
                    <p>Phone: {player.phone} - Email : {player.email}</p>
                    <p>Strength: {player.strength} - Endurance : {player.endurance}</p>
                </div>
                <div className="card-action">
                    Team : {player.team}
                </div>
            </div>
            </div>
        </div>
    )
}

export default PlayerSingle;