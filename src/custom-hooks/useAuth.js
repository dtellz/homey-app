const useAuth = () => {

    return sessionStorage.getItem('session_token') !== null || localStorage.getItem('session_token') !== null ? true : false;

}

export default useAuth;