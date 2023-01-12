import { useState, useRef, useMemo, useReducer } from "react"

const defaultState = {
    data: null,
    loading: true,
    error: null
}

const useAsync = () => {

    const initStateRef = useRef(defaultState)
    const reducer = (state, action) => ({ ...state, ...action })
    const [state, dispatch] = useReducer(reducer, initStateRef.current)

    const run = (promise) => {
        promise.then((res) => {
            dispatch({ data: res, loading: false, error: null })
        }).catch((error) => {
            dispatch({ data: null, loading: false, error: error })
        })
    }
    return { run, isLoading: state?.loading, data: state?.data?.entries, error: state?.error }
}

export default useAsync;