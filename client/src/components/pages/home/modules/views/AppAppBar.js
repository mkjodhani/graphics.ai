import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '../components/Typography';
import { updateUserToFirebase } from '../../../../../firebase/db';
import { userActions } from '../../../../../redux/actions/userActions';
import { googleSignInPopUp } from '../../../../../firebase/actions';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
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
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24, fontFamily: 'DancingScript' }}
          >
            {'Graphics AI'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {/* <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link> */}
            {
              user.userInfo && <div style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
                <Typography variant='h6' sx={{ ...rightLink, mr: 1, color: 'secondary.main' }} >
                  {user.userInfo.displayName}
                </Typography>
                <img src={user.userInfo.photoURL} height={45} width={45} style={{ 'borderRadius': '100%' }} />

              </div>
            }

            {/* {
              !user.userInfo && <Link
                variant="h6"
                underline="none"
                href="/sign-up/"
                sx={{ ...rightLink, color: 'secondary.main' }}
              >
                {'Sign Up'}
              </Link>
            } */}
            {
              !user.userInfo && <div onClick={async () => {
                const res = await googleSignInPopUp();
                await updateUserInfo(res);
              }}>
                <Typography variant='h6' sx={{ ...rightLink, mr: 1, color: 'secondary.main' }}>
                  {"Sign in"}
                </Typography>
              </div>
            }
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
