import React, {useEffect, useLayoutEffect, useState} from "react";
import Header from "./component/Header";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Login from "./page/Login";
import AppContext from "./store/AppContext";
import Routes from './utils/route/route'
import Auth from "./utils/route/Auth";
import Guest from "./utils/route/Guest";
import Loading from "./component/Loading";
import NotFound from "./component/NotFound";

function App(){

    const [isLogin,setIsLogin] = useState(null);
    const [user,setUser] = useState([]);

    useEffect(() => {
        setIsLogin(localStorage.getItem('is_l') != null ? true : false)

        const data = localStorage.getItem('data');

        if(data){
            setUser(JSON.parse(data));
        }

    },[])


    if(isLogin == null) return <Loading />

    return (
        <div>
            <Router>
                <AppContext.Provider value={[isLogin,user]}>
                    <Header isLogin={isLogin} changeAuthL={() => setIsLogin(false)} handleLogoutData={() => setUser([])} />
                    <Switch>
                        {
                            Routes.map((val,key) => {
                                if(val.protected == 'auth'){
                                    return (<Auth exact={true} path={val.path} component={val.components} key={key}/>)
                                }

                                if(val.protected == 'guest'){
                                    return (<Guest exact={true} path={val.path} component={val.components} key={key}/>)
                                }

                                return (<Route exact={true} path={val.path} component={val.components} key={key}/>)
                            })
                        }
                        {
                            <Guest exact={true} path="/login" component={() => <Login changeAuth={(auth) => setIsLogin(auth)} handleLoginData={(val) => setUser(val)} />} />
                        }

                        <Route path="*">
                            <NotFound />
                        </Route>

                    </Switch>
                </AppContext.Provider>
            </Router>
        </div>
    )
}

export default App
