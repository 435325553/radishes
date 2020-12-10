import { state } from './state'
import { actions, mutations } from './sage'

export * from './state'
export * from './sage'

export const NAMESPACED = 'ArtistSearch'

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
