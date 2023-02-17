import { useReducer } from "react";
import GithubContext from "./GithubContext";
import githubReducer from "./GithubReducer";
import axios from "axios";

const GithubState = (props) => {
    const initalState = {
        users: [],
        user: {},
        loading: false,
        alert: null
    }

    const [state, dispatch] = useReducer(githubReducer, initalState);

    const ClearResults = () => {
        dispatch({
            type: "CLEAR_RESULTS"
        })
    }
    
    const SetAlert = (msg, type) => {
        dispatch({
            type: "SET_ALERT",
            msg:msg,
            typec:type
        })
        setTimeout(() => {
            dispatch({
                type: "SET_ALERT"
            })
        }, 3000)

    }

    const GetUser = (username) => {
        axios.get(`https://api.github.com/users/${username}`).then(res => {
            console.log(res.data)
           dispatch({
               type:"SET_USER",
               payload:res.data
           })
        })
    }
    const setloading = ()=>{
        dispatch({
            type:"SET_LOADING"
        })
    }

    const SearchUsers = (user) => {
       setloading()
        setTimeout(() => {
            axios.get(`https://api.github.com/search/users?q=${user}`).then(res => {
                console.log(res.data)
                dispatch({
                    type:"SEARCH_USERS",
                    payload:res.data.items
                })
            })
        }, 1000)
    }

    return (
        <GithubContext.Provider value={
            {
                users: state.users,
                user: state.user,
                loading: state.loading,
                alert: state.alert,

                SearchUsers,
                ClearResults,
                SetAlert,
                GetUser,

            }}>
            {props.children}

        </GithubContext.Provider>
    )

}

export default GithubState