import {useState} from 'react'

function useUserProvider(){
    const [name, setName] = useState("");
    const [idade, setIdade] = useState("");

    return {
        name,
        setName,
        idade,
        setIdade
    }
}

export default useUserProvider

