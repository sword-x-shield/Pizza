import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { StateType } from "./store/types"

declare module '@vue/runtime-core' {
  // Declare your own store states.
  // interface State {
  //   count: number
  // }

  interface ComponentCustomProperties {
    $store: Store<StateType>
  }
}
