export interface INavItem {
  name: string
  to: string
}
export interface IPlace {
  name: string
  url: string
}

export interface IProfileDTS {
  id: null | number
  name: string
  status: string
  species: string
  image: string
  origin: IPlace
}

export interface IProfileViewDTS extends IProfileDTS {
  gender: string
  episode: Array<string>
  created: Date
  url: string
  location: IPlace
}
