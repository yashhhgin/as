import Home from './../../page/Home'
import Picture from './../../page/Picture'

export default [
    {
        path:"/",
        component:() => <Home />,
        protected:''
    },
    {
        path:"/picture",
        component:() => <Picture />,
        protected:'auth'
    }
]