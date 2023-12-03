export interface IEntity {
  id: string
  name: string
  state: boolean | 'partially_checked'
  childes: Array<IEntityChild>
}

export interface IEntityChild {
  id: string
  name: string
  isChecked: boolean
  count: number
  color: string
}

export interface IShuffledColors {
  id: string,
  color: string,
}
