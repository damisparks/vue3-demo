import { useQuery } from 'vue-query'
import services from '@/services'

export function useApiQuery() {
  const getAllProfilesQuery = () =>
    useQuery('profiles', () => services.getAllCharacters(), {
      select: (res) => res.data,
    })

  const getSingleProfile = (profileId: number) => {
    useQuery(
      ['profile', profileId],
      () => services.getSingleCharacter(profileId),
      { select: (res) => res.data }
    )
  }

  return { getAllProfilesQuery, getSingleProfile }
}
