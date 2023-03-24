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
    likedOrUnlike(user: IProfileDTS) {
      if (!user) return
      const index = this.users.findIndex((el) => el.id === user.id)
      if (index === -1) return
      this.users.splice(index, 1, {
        ...user,
        favourite: (user.favourite = !user.favourite),
      })
    },
  },
  getters: {
    allUsers: (state) => state.newProfiles.concat(state.users).slice(0, 5),
    allFavourites: (state) => state.users.filter((el) => el.favourite),
    noFavourites: (state) => !state.users.filter((el) => el.favourite).length,
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
