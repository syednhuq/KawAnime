import {log} from '../../utils'

export default {
  set (state, data) {
    state.entries = data
    log(`History updated.`)
  },
  setModal (state, data) {
    state.modal = data
  }
}
