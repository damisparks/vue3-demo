export interface INavItem {
  name: string
  to: string
}
export interface IPlace {
  name: string
  url: string
}

enum IProfileStatusEnum {
  Alive = 'Alive',
  Dead = 'Dead',
  Unknown = 'Unknown',
}

export enum INoticeStyleEnum {
  success = 'success',
  error = 'error',
  info = 'info',
  warning = 'warning',
  none = 'none',
}

export type IProfileStatusType = keyof typeof IProfileStatusEnum
export type INoticeType = keyof typeof INoticeStyleEnum

export interface IProfileDTS {
  id: number
  image: string
  name: string
  status: IProfileStatusType
  species: string
  type: string
  gender: string
}

export interface IProfileViewDTS extends IProfileDTS {
  origin: IPlace
  episode: Array<string>
  created: Date
  url: string
  location: IPlace
}
