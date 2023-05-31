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
    updateAppointment(appointment: IAppointment) {
      const index = this.appointments.findIndex(
        (el) => el.id === appointment.id
      )
      if (index === -1) return
      this.appointments.splice(index, 1, appointment)
    },
  },
  getters: {
    allAppointments: (state) => state.appointments,
    hasAppointments: (state) => !!state.appointments.length,
    getCurrentAppointment: (state) => (id: string) => {
      return state.appointments.filter((el) => el.id === id)
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppointmentStore, import.meta.hot))
}
