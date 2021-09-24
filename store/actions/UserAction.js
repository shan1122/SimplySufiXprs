import userTypes from "../type/UserType";

export const setCurrentUser = (user) =>({
    type:userTypes.SET_CURRENT_USER,
    payload:user

});


export const SignoutUser = () => ({
    type: userTypes.SIGN_OUT_USER_SUCCESS
  })
// export const signInUser = user =>({
//     type:userTypes.SET_CURRENT_USER,
//     payload:user

// });

