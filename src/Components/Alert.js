import React, { useContext } from 'react'
import GithubContext from '../Context/GithubContext'

const Alert = (props) => {
    const githubcontext = useContext(GithubContext)
    return (
        githubcontext.alert !== null && (
            <div className={`alert alert-${githubcontext.alert.type} alert-dismissible fade show my-1`} role="alert">
                {githubcontext.alert.msg}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    )
}

export default Alert
