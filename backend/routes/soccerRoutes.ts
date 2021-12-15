import { addNewPlayer, getPlayers, getPlayerWithId, updatePlayer, deletePlayer } from '../controllers/playerControllers';

const routes = (app : any) => {
    app.route('/players')
        .post(addNewPlayer)
        .get(getPlayers);
    app.route('/player/:PlayerId')
        .get(getPlayerWithId)
        .put(updatePlayer)
        .delete(deletePlayer);
}

export default routes;