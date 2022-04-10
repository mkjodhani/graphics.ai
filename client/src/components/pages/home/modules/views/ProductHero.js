import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleSignInPopUp } from '../../../../../firebase/actions';
import { updateUserToFirebase } from '../../../../../firebase/db';
import { userActions } from '../../../../../redux/actions/userActions';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

// const backgroundImage =
//   'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
const backgroundImage = "/static/themes/graphicsAI/tantrum-a_GKaplLI0w-unsplash.jpg"


export default function ProductHero() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const updateUserInfo = async (res) => {
    if (res.error)
      alert(res.error.errorMessage)
    else {
      const { email, displayName, photoURL, lastLoginAt } = res.user
      await updateUserToFirebase({ email, displayName, photoURL, lastLoginAt });
      dispatch(userActions.logIn({ email, displayName, photoURL, lastLoginAt }))
    }
  }
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Lets Add Creativity
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        A New Design Perspective
      </Typography>
      {
        !user.userInfo && <div onClick={async () => {
          const res = await googleSignInPopUp();
          await updateUserInfo(res);
        }}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            component="div"
            sx={{ minWidth: 200 }}
          >
            Register
          </Button>
        </div>
      }

      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
