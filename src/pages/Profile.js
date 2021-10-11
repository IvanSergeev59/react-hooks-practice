import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GithubContext } from '../context/github/githubContext'

export const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
    const urlName = match.params.name

    useEffect( () => {
    
        getRepos(urlName)
        getUser(urlName)

    }, [])

    if (loading) {
        return <p className="text-center">Загрузка...</p>
    }


    const {
        name, company, avatar_url, location, bio, blog, login, 
        html_url, followers, public_repos, public_gists
    } = user
  
    return (
        <Fragment>
            <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img scr={avatar_url} alt={name}>
                                <h1>{name}</h1> 
                                {location && <p>Местоположение: {location}</p>}

                            </img>
                        </div>
                        <div className="col">
                            bio && <Fragment>
                                <h3>BIO</h3>
                                <p>{bio}</p>
                            </Fragment>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}