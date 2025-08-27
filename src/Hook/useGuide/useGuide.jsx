import { useEffect, useState } from "react";


const useGuide = () => {
    const [guide,setGuide] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() =>{
        fetch('guide.json')
            .then(res => res.json())
            .then(data =>{
                setGuide(data)
                setLoading(false)
            })
    },[])

    return[guide,loading]
};

export default useGuide;