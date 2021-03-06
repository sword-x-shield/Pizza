import { Module } from 'vuex'
import { StateType } from '../types'

const state = {
  count: 0
}

export type AppStateType = typeof state;

const mutations = {
  SET_COUNT: (state: AppStateType, count: number) => {
    state.count = count
  }
}

const actions = {
  setCount({ commit }: any, count: number) {
    commit('SET_COUNT', count)
  }
}

const app: Module<AppStateType, StateType> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default app

