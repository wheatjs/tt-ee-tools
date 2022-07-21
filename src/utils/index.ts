import { fullLoadAmps } from '~/data'

export function convertHpToAmps(hp: number) {
  return fullLoadAmps.find(fla => hp < fla[0])
}
