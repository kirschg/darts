import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        reload()
    }, [])

    const reload = () => {
        axios.get("https://darts.sulla.hu/darts")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }

    const deleteItem = (id) => {
        axios.delete("https://darts.sulla.hu/darts/" + id)
            .then(res => {
                console.log(res);
                reload();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='App'>
            <Link to="/Adder" className='btn btn-primary m-3'>
                Add player
            </Link>
            <div className='d-flex flex-wrap justify-content-evenly'>
                {data.map(player => (
                    <div className="card" style={{ width: "260px", margin: "10px", height: "fit-content" }} key={player.id}>
                        <img src={player.image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{player.name}</h5>
                            <div className="card-text">
                                <p>Birth date: {player.birth_date}</p>
                                <p>Championships won: {player.world_ch_won}</p>
                            </div>
                            <a href={player.profile_url} className="card-link">Profile</a>
                            <br />
                            <Link to={{ pathname: "/" + player.id + "/Editor", state: { id: player.id } }} className="btn btn-primary">Edit</Link>
                            <Link onClick={() => { deleteItem(player.id) }} className="btn btn-danger mx-2">Delete</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}