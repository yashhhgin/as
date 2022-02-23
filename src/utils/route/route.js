import Home from './../../page/Home'
import Picture from './../../page/Picture'

export default [
    {
        path:"/",
        components:() => <Home />,
        protected:''
    },
    {
        path:"/picture",
        components:() => <Picture />,
        protected:'auth'
    }
]
