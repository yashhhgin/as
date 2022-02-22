import React, {useContext} from "react";
import AppContext from "../store/AppContext";

function Picture(){

    const [isLogin,user] = useContext(AppContext);

    console.log(isLogin)
    console.log(user)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Movie Name</th>
                        <th>Review</th>
                        <th>Review Average</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pushpa</td>
                        <td>5</td>
                        <td>6.2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Picture