import { normalizeAttendeesApiData } from '@lib/attendees'

export const getLatestLocation = (locations = []) => locations
  .reduce((acc, cur) => {
    const latest = cur.start
      ? acc.start > cur.start
      : acc.id > cur.id
    return latest ? acc : cur
  }, {})

export const getFutureLocations = (locations = []) => locations
  .reduce((acc, cur) => {
    const isValid = !cur.end || new Date(cur.end) >= new Date()
    return isValid ? [...acc, cur] : acc
  }, [])

export const sortByStartDate = (a, b) => new Date(b.start) - new Date(a.start)

export const normalizeLocationApiData = location => {
  const normalizedLocation = {
    id: location.id,
    address: location.attributes.address,
    city: location.attributes.city,
    country: location.attributes.country,
    timezone: location.attributes.timezone,
    latitude: location.attributes.latitude,
    longitude: location.attributes.longitude,
    start: location.attributes.start,
    end: location.attributes.end,
    coordinates: [
      Number(location.attributes.longitude),
      Number(location.attributes.latitude),
    ],
    title: location.attributes.title,
    description: location.attributes.description,
  }

  if (location.attributes.attendees) {
    normalizedLocation.attendees = normalizeAttendeesApiData(location.attributes.attendees)
  }

  if (location.attributes.profile) {
    normalizedLocation.profile = location.attributes.profile?.data?.id
  }

  return normalizedLocation
}

export const normalizeLocationsApiData = apiData => apiData?.data
  ? apiData.data.map(normalizeLocationApiData).sort(sortByStartDate)
  : undefined

export const compareCoordinates = (location, coordinates) =>
  Array.isArray(location.coordinates)
    && location.coordinates[0] === coordinates[0]
    && location.coordinates[1] === coordinates[1]

export const getLocationById = (locations, locationId) =>
  locations.find(location => location.id === locationId) || {}

export const getFormattedLocationTitle = (location = {}) =>
  [location.country, location.city]
    .filter(Boolean)
    .join(' - ')
