import React from 'react'
import LottieHandler from '../lottieHandler/LottieHandler'

const Loading = ({ loading, error, children }) => {
    console.log(loading)
    console.log(error)
    if (loading === "pending") {
        return (
            <LottieHandler type="loading" message="Please wait..." />
        )
    }
    if (loading === "failed") {
        return (
            <LottieHandler type="error" />
        )
        }
        return <>{children}</>;
}

export default Loading