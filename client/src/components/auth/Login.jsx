
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleSignInPopUp } from '../../firebase/actions'
import { updateUserToFirebase } from '../../firebase/db'
import { userActions } from '../../redux/actions/userActions';
export default function Login() {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    console.log(user);
    useEffect(() => {
        if (user.userInfo) {
            navigate("/");
        }
    })
    const updateUserInfo = async (res) => {
        console.log("updateUserInfo", res);
        if (res.error)
            alert(res.error.errorMessage)
        else {
            const { email, displayName, photoURL, lastLoginAt } = res.user
            await updateUserToFirebase({ email, displayName, photoURL, lastLoginAt });
            dispatch(userActions.logIn({ email, displayName, photoURL, lastLoginAt }))
        }
    }
    return (
        <>
            <div>Login</div>
            <button onClick={async () => {
                const res = await googleSignInPopUp();
                await updateUserInfo(res);
            }}> Google Sign In</button>
            {
                user.userInfo && <>
                    <div>
                        <p>{user.userInfo.displayName}</p>
                        <p>{user.userInfo.email}</p>
                        <p>{user.userInfo.lastLoginAt}</p>
                        <img src={user.userInfo.photoURL} />
                    </div>
                </>
            }
        </>
    )
}
