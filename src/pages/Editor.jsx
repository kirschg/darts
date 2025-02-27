import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const Editor = () => {
    var navigate = useNavigate(); 
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://darts.sulla.hu/darts/" + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])
    const ConfirmEdit = () => {
        axios.put("https://darts.sulla.hu/darts/" + id, data)
            .then(res =>{
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
                        name: data.name,
                        birth_date: data.birth_date,
                        world_ch_won: parseInt(data.world_ch_won),
                        profile_url: data.profile_url,
                        image_url: e.target.value
                    })
                }}
                />
            </div>
            <button className="btn btn-success" onClick={()=>{ConfirmEdit()}}>Save Changes</button>
        </div>
    )
}