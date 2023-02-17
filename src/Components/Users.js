import React, { useState,useContext } from 'react';
import Loading from './Loading';
import User from "./User";
import GithubContext from '../Context/GithubContext';


const Users = (props) => {
    const githubcontext = useContext(GithubContext)
    if (githubcontext.loading) {
        console.log("a")
        return <Loading />
    }
     else {
        console.log("b");
        return (
            <div className="container mt-3">
                <div className="row justify-content-center">
                    {githubcontext.users.map(user => {
                        return <User user={user} />
                    })}
                </div>
            </div>
        )
    }
}
export default Users
