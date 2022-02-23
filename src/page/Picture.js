import React, {useContext,useState,useEffect,Component} from "react";
import axios from "axios";
import Model from "../component/Model";
import Chart from "react-apexcharts";


function Picture(){

    const [movies,setMovies] = useState([]);
    const [error,setError] = useState([]);
    const [show,setShow] = useState(false);
    const [eData,setEData] = useState({});
    const [graph,setGraph] = useState({});

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API}/movies`)
            .then(res => {
                setMovies(res.data)
            }).catch(e => {
                setError(e.response)
            })

    },[]);

    useEffect(() => {
        console.log(Object)
        setGraph({
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        })
    },[])

    function handleUpdate(data){
        setEData({})

        axios.post(`${process.env.REACT_APP_API}/movies-edit`,{id:data.id,m_name:data.m_name,review:data.review})
            .then(res => console.log(res));

        const mov = movies.map((val,key) => {
                        return val.id == data.id
                                ? {...val,...data}
                                : val;
                        })

        setMovies(mov)
        setShow(false);
    }

    function handleModel(key){
        setShow(true)
        setEData(movies.filter((v,k) => k === key)[0])
    }

    return (
        <div>
            {
                show && <Model handleClose={() => setShow(false)} handleData={eData} handleUpdate={handleUpdate}/>
            }
            {
                Object.keys(graph).length != 0 ? <Chart options={graph.options}
                               series={graph.series}
                               type="bar"
                               width="500" /> : null
            }

            <table className="m-auto">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Movie Name</th>
                        <th>Review</th>
                        <th>Review Average</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    movies.map((val,key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.m_name}</td>
                                <td>{val.review}</td>
                                <td><button className="w-20 rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-1" onClick={() => handleModel(key)}>Edit</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Picture