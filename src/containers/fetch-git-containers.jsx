import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { fetchRepos, fetchUserDetails } from "./actions"

function FetchGitRepos({ repoList, fetchRepos, fetchUserDetails, currentUserDetails }) {
    useEffect(() => {

        fetchRepos();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <>Repo List</>
            {repoList && repoList.map((item) => {
                return (
                    <>
                        <div>Fullname: {item.full_name}</div>

                        <button onClick={() => { fetchUserDetails(item.name) }}>Name: {item.name}</button>
                        {currentUserDetails.login === item.name ? (Object.keys(currentUserDetails).map((key) => {

                            return (<div>{key}:{currentUserDetails[key]}</div>)


                        })) : null}
                    </>
                )

            })}

        </div >
    )
}



const mapStateToProps = ({ repos: { repoList, currentUserDetails } }) => {

    return {
        repoList,
        currentUserDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepos: () => {
            dispatch(fetchRepos())
        },
        fetchUserDetails: (name) => {
            dispatch(fetchUserDetails(name))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FetchGitRepos)