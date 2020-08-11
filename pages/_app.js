import React,{useEffect,useState} from "react";
import '../styles/resetStyles.css'
import '../styles/Home.sass'
import '../styles/Auth.sass'

const MyApp = ({ Component, pageProps }) => {
    const [data,dataHandler] = useState(null)
    const [dbRefresh,dbRefreshHandler] = useState(0)
    useEffect(() => {
        fetch('https://sm-smartmenu.firebaseio.com/.json')
            .then(response => response.json())
            .then(
                json => dataHandler({ data: json })
            )
    },[dbRefresh])
    return <Component {...pageProps} data={data}/>
}

export default MyApp
