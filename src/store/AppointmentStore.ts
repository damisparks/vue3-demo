import { defineStore, acceptHMRUpdate } from 'pinia'

import { IAppointment } from '@/types'
export const useAppointmentStore = defineStore('AppointmentStore', {
  state: () => {
    return {
      appointments: [] as IAppointment[],
    }
  },
  actions: {
    addNewAppointment(appointment: IAppointment) {
      this.appointments.unshift(appointment)
    },
  },
  getters: {},
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppointmentStore, import.meta.hot))
}
