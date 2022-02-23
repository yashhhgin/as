import React, {useState} from "react";

function Model({handleClose,handleData,handleUpdate}){

    const [eData,setEData] = useState({m_name:handleData.m_name,review:handleData.review,id:handleData.id});
    const [loading,setLoading] = useState(false);

    function handleEdit(e){
        e.preventDefault();

        setLoading(true);

        handleUpdate(eData)

        setLoading(false);
    }

    function handleChange(e){
        setEData({...eData,[e.target.name]:e.target.value})
    }

    return (
        <div>
            <section className="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50" onClick={handleClose}></section>
            <div className="absolute inset-0">
                <div className="flex h-full">
                    <div className="z-30 m-auto bg-white p-2 rounded shadow w-10/12 md:w-1/3">
                        <div className="p-2 border">
                            <h1 className="text-2xl text-center">Edit Review</h1>

                            <form className="p-2 my-2" onSubmit={handleEdit}>
                                <div className="my-4">
                                    <label>Movie Name</label>
                                    <input name="m_name" className="rounded shadow p-2 w-full" value={eData.m_name} onChange={handleChange}/>
                                </div>
                                <div className="my-4">
                                    <label>Review</label>
                                    <input name="review" className="rounded shadow p-2 w-full" type="text" value={eData.review} onChange={handleChange}/>
                                </div>
                                <div className="my-4">
                                    <button type="submit" className="w-full rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2">
                                        {
                                            loading ? <span>⌛</span> : <span>Change</span>
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model;