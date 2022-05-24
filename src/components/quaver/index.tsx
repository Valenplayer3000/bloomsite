import React, { useState, useEffect } from "react";
import axios from "axios";

interface quaverapi {
    id?: number;
    mapid?: number;
    mapsetid?: number;
    mode?: number;
}

/**
 * QuaverStats Component
 * @param {number?} id
 * @param {number?} mapid
 * @param {number?} mapsetid
 * @param {number?} mode (1 = 4k, 2 = 7k) 
 * 
 * @returns 
 */
const QuaverStats = (props: quaverapi) => {
    const [user, setUser] = useState<string>();
    const [pfp, setPFP] = useState<string>();
    const [stats, setStats] = useState<string[]>();
    const [country, setCountry] = useState<string>();
    const [latest, setLatest] = useState<string>();

    useEffect(() => {
        axios.get(`https://api.quavergame.com/v1/users?id=${props.id}`)
    .then(function (res){
        setUser(res.data.users[0].username);
        setPFP(res.data.users[0].avatar_url);
        setCountry(res.data.users[0].country);
        setLatest(res.data.users[0].latest_activity);
    })

    axios.get(`https://api.quavergame.com/v1/users/scores/recent?id=${props.id}&mode=${props.mode}`)
    .then (function (res) {
        setStats([res.data.scores[0].count_marv, res.data.scores[0].count_perf, res.data.scores[0].count_great, res.data.scores[0].count_good, res.data.scores[0].count_ok, res.data.scores[0].count_miss, res.data.scores[0].map.title]);
        console.log(res.data.scores[0])
    })
    }, [])

    return (
        <div className="quaver">
            <div>
            {pfp? (
                <img
                    className="quaver pfp"
                    src={pfp}
                />
            ): (
                null
            )
            }
            {user? (
                <>
                    <p className="quaver username">{user}</p>
                    <div>
                        <p className="quaver content">ID:{props.id}</p>
                        <p className="quaver content">Country: {country}</p>
                    </div>
                </>
                )
            :(
                null
                )
            }
            </div>
            {
                stats? (
                    <div className="stats">
                    <p className="quaver subtitle">Recent Play: {stats[6] || null}</p>
                    <p className="quaver marv">Marv: {stats[0] || 0}</p>
                    <p className="quaver perf">Perf: {stats[1] || 0}</p>
                    <p className="quaver great">Great: {stats[2] || 0}</p>
                    <p className="quaver good">Good: {stats[3] || 0}</p>
                    <p className="quaver ok">Ok: {stats[4] || 0}</p>
                    <p className="quaver miss">Miss: {stats[5] || 0}</p>
                    <p className="quaver content">Updated at: {latest}</p>
                    </div>
                ): (
                    null
                )
            }
        </div>
    )
}


export default QuaverStats;