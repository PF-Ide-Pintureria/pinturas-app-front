import { LOGOUT_USER } from '../../action-type'

export const logoutUser = (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
    payload: {}
  })
}
