import { useEffect, useState } from "react";


const useTourPackages = () => {
    const [packages,setPackages] = useState([])
    const [loading, setLoading] = useState(true)

        useEffect(()=>{
            fetch('tourPackages.json')
            .then(res => res.json())
            .then(data =>{ 
                setPackages(data)
                setLoading(false)
            })
        },[])
    return [packages,loading]
};

export default useTourPackages;