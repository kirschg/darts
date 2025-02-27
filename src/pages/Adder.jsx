import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const Adder = () => {
    var navigate = useNavigate();
    const [data, setData] = useState([])
    const ConfirmAdd = () => {
        axios.post("https://darts.sulla.hu/darts", data)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='container p-4'>
            <div className="form-group">
                <label htmlFor="name">Player name</label>
                <input
                    type="text"
                    className="form-control"
                    value={data.name}
                    id="name"
                    placeholder="Enter player's name"
                    onChange={e => {
                        setData({
                            id: 0,
                            name: e.target.value,
                            birth_date: data.birth_date,
                            world_ch_won: parseInt(data.world_ch_won),
                            profile_url: data.profile_url,
                            image_url: data.image_url
                        })
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="brd">Player birth date</label>
                <input type="text"
                    className="form-control"
                    value={data.birth_date}
                    id="brd"
                    placeholder="Enter player's birth date"
                    onChange={e => {
                        setData({
                            id: 0,
                            name: data.name,
                            birth_date: e.target.value,
                            world_ch_won: parseInt(data.world_ch_won),
                            profile_url: data.profile_url,
                            image_url: data.image_url
                        })
                    }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="ch_won">Player won championships</label>
                <input type="number" 
                className="form-control" 
                value={data.world_ch_won} 
                id="ch_won" 
                placeholder="Enter player's number of championships won" 
                onChange={e => {
                    setData({
                        id: 0,
                        name: data.name,
                        birth_date: data.birth_date,
                        world_ch_won: parseInt(e.target.value),
                        profile_url: data.profile_url,
                        image_url: data.image_url
                    })
                }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="link">Player profile</label>
                <input type="text" 
                className="form-control" 
                value={data.profile_url} 
                id="link" 
                placeholder="Enter player's wikipedia page link" 
                onChange={e => {
                    setData({
                        id: 0,
                        name: data.name,
                        birth_date: data.birth_date,
                        world_ch_won: parseInt(data.world_ch_won),
                        profile_url: e.target.value,
                        image_url: data.image_url
                    })
                }}
                />
            </div>
            <div className="form-group">
                <label htmlFor="url">Player image</label>
                <input type="text" 
                className="form-control" 
                value={data.image_url} 
                id="url" 
                placeholder="Enter image url of tthe player " 
                onChange={e => {
                    setData({
                        id: 0,
                        name: data.name,
                        birth_date: data.birth_date,
                        world_ch_won: parseInt(data.world_ch_won),
                        profile_url: data.profile_url,
                        image_url: e.target.value
                    })
                }}
                />
            </div>
            <button className="btn btn-success" onClick={()=>{ConfirmAdd()}}>Add Player</button>
        </div>
    )
}