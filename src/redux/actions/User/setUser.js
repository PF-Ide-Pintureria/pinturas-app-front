import { SET_USER } from '../../action-type'

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
})
