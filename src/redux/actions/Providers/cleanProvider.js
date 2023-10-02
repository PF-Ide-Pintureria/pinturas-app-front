import { CLEAN_PROVIDER } from '../../action-type'

export const cleanProvider = () => {
  return { type: CLEAN_PROVIDER, payload: {} }
}
