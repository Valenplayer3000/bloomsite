import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface quaverapi {
  id?: number;
  mapid?: number;
  mapsetid?: number;
  mode?: number;
}

/**
 * QuaverStats Component
 *
 * @author Stationarystation <raulytstation@outlook.com>
 * @param {number} id
 * @param {number} mapid
 * @param {number} mapsetid
 * @param {number} mode (1 = 4k, 2 = 7k)
 *
 * @returns
 */
const QuaverStats = (props: quaverapi) => {
  // Declare variables
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string>("NO USER");
  const [pfp, setPFP] = useState<string>("");
  const [stats, setStats] = useState<string[] | number[] | null>();
  const [country, setCountry] = useState<string>("UWU");
  const [latest, setLatest] = useState<string>("6969-69-69 - 69:420pm");

  const calculateDiff = (diff: number | string) => {
    if (diff < 1.0) {
      return "#B5E8E0";
    } else if (diff > 1.0 && diff < 2.5) {
      return "#ABE9B3";
    } else if (diff > 2.5 && diff < 10.0) {
      return "#96CDFB";
    } else if (diff > 10.0 && diff < 20.0) {
      return "#F8BD96";
    } else if (diff > 20.0 && diff < 30.0) {
      return "#F28FAD";
    } else if (diff > 30.0) {
      return "#DDB6F2";
    }
  };

  // Get user information via api.quavergame.com
  const getData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`https://api.quavergame.com/v1/users?id=${props.id}`)
        .then(function (res) {
          setUser(res.data.users[0].username);
          setPFP(res.data.users[0].avatar_url);
          setCountry(res.data.users[0].country);
          setLatest(res.data.users[0].latest_activity);
        });

      await axios
        .get(
          `https://api.quavergame.com/v1/users/scores/recent?id=${props.id}&mode=${props.mode}`
        )
        .then(function (res) {
          setStats([
            res.data.scores[0].count_marv,
            res.data.scores[0].count_perf,
            res.data.scores[0].count_great,
            res.data.scores[0].count_good,
            res.data.scores[0].count_ok,
            res.data.scores[0].count_miss,
            res.data.scores[0].map.title,
            Math.round(
              (res.data.scores[0].performance_rating + Number.EPSILON) * 100
            ) / 100,
          ]);
        });
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };
  // Load data when component mounts
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Only load component when getData finishes */}
      {loading ? (
        <div className='quaver'>
          <p>QuaverStats Loading...</p>
        </div>
      ) : (
        <div
          className='quaver'
          key={props.id}
        >
          <div>
            {pfp ? (
              <img
                className='quaver pfp'
                src={pfp}
              />
            ) : null}
            {user ? (
              <>
                <p className='quaver username'>{user}</p>
                <div>
                  <p className='quaver content'>ID:{props.id}</p>
                  <p className='quaver content'>Country: {country}</p>
                  <p className='quaver content'>Updated at: {latest}</p>
                </div>
              </>
            ) : null}
          </div>
          {stats ? (
            <div className='mapstats'>
              <p className='quaver subtitle'>
                Recent Play: {stats[6] || "Mapset Not found lmao"}
              </p>
              <p className='quaver diff'>
                Difficulty Rating:{" "}
                <span
                  style={{
                    color: calculateDiff(stats[7] || 0.0),
                  }}
                >
                  {stats[7] || 0.0}
                </span>
              </p>
              <p className='quaver marv'>Marv: {stats[0] || 0}</p>
              <p className='quaver perf'>Perf: {stats[1] || 0}</p>
              <p className='quaver great'>Great: {stats[2] || 0}</p>
              <p className='quaver good'>Good: {stats[3] || 0}</p>
              <p className='quaver ok'>Ok: {stats[4] || 0}</p>
              <p className='quaver miss'>Miss: {stats[5] || 0}</p>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default QuaverStats;
