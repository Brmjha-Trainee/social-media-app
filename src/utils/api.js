import { _getUsers, _getTweets, _saveLikeToggle,_saveTweet } from "./_Data";


// get the data we when intial start 

export function getInitialData() {
    Promise.all([
        _getUsers(),
        _getTweets(),]).then(([users,tweet]) => ({
            users,
            tweets
        }))
}



e
