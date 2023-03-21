export interface INavItem {
  name: string
  to: string
}

export interface IProfileDTS {
  id: null | number
  name: string
  status: string
  species: string
  image: string
}

export interface ILocation {
  name: string
  url: string
}
export interface IProfileViewDTS extends IProfileDTS {
  gender: string
  episode: Array<string>
  created: Date
  url: string
  location: ILocation
}
