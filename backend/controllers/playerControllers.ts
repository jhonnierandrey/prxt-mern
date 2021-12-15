import mongoose from 'mongoose';
import { PlayerSquema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSquema);

export const addNewPlayer = (req : any, res : any) => {
    let newPlayer = new Player(req.body);

    newPlayer.save((err : any, Player : any) => {
        if(err){
            res.send(err);
        }
        res.json(Player)
    })
}

export const getPlayers = (req : any, res : any) => {
    Player.find({},(err : any, Player : any) => {
        if(err){
            res.send(err);
        }
        res.json(Player)
    })
}

export const getPlayerWithId = (req : any, res : any) => {
    Player.findById(req.params.PlayerId,(err : any, Player : any) => {
        if(err){
            res.send(err);
        }
        res.json(Player)
    })
}

export const updatePlayer = (req : any, res : any) => {
    Player.findOneAndUpdate({ _id : req.params.PlayerId}, req.body, {new : true}, (err : any, Player : any) => {
        if(err){
            res.send(err);
        }
        res.json(Player)
    })
}

export const deletePlayer = (req : any, res : any) => {
    Player.remove({ _id : req.params.PlayerId}, (err : any) => {
        if(err){
            res.send(err);
        }
        res.json({ message : "player deleted"})
    })
}