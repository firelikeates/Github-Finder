import React, { useState, useContext, useReducer } from 'react';
import GithubContext from '../Context/GithubContext';

const Search = (props) => {
    const githubcontxt = useContext(GithubContext)
    const [key, setKey] = useState("");
    
    const setKeyword = (e) => {
        setKey(e.target.value)
    }
    const OnFormSubmit = (e) => {
        e.preventDefault();
        if (key.length === 0) {
            githubcontxt.SetAlert("Please write any user name!!", "danger")
        } else {
            githubcontxt.SearchUsers(key)
            setKey("")
        }
    }

    return (
        <div>
            <form id="form_id" onSubmit={OnFormSubmit}>
                <div className="input-group">
                    <input value={key} onChange={setKeyword} type="text" name="txtItem" placeholder="search user" className="form-control" />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-primary mx-0">Search</button>
                    </div>
                </div>
            </form>
            {
                githubcontxt.users.length>0 && <button onClick={githubcontxt.ClearResults} type="submit" className="btn mt-2 btn-sm btn-block btn-secondary">Clear Results</button> 

            }
        </div>

    )
}

export default Search
