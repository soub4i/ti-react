const baseURL = process.env.REACT_APP_BASE_URL
export default {
  get: (resource, params = "") => fetch(`${baseURL}?${resource}${params}`),
}
