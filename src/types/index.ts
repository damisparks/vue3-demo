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

export type IProfileStatusType = keyof typeof IProfileStatusEnum

export interface IProfileDTS {
  id: null | number
  name: string
  status: IProfileStatusType
  species: string
  image: string
  origin: IPlace
}

export interface IProfileViewDTS extends IProfileDTS {
  type: string
  gender: string
  episode: Array<string>
  created: Date
  url: string
  location: IPlace
}
