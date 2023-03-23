import { defineStore, acceptHMRUpdate } from 'pinia'
import { IProfileDTS } from '@/types'

export const useUserStore = defineStore('UserStore', {
  state: () => {
    return {
      users: [] as IProfileDTS[],
      newProfiles: [] as IProfileDTS[],
    }
  },
  actions: {
    addNewProfile(user: IProfileDTS) {
      this.newProfiles.unshift(user)
    },
  },
  getters: {
    allUsers: (state) => state.newProfiles.concat(state.users),
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
