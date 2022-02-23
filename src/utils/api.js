import { _getUsers, _getTweets, _saveLikeToggle,_saveTweet } from "./_Data";


// get the data we when intial start 


// fetch the data when initial the appp 
export function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getTweets()
    ]).then(([users,tweets]) => ({
            users,
            tweets
        }))
}

