/* eslint-disable import/prefer-default-export */
import { stringify } from 'query-string'

export const request = async ({ url, data, method = 'GET', params, options }) => {
	const response = await fetch(`https://data.jsdelivr.com/v1/${url}${stringify(params)}`, {
		method,
		body: JSON.stringify(data),
		headers: options,
	})
	return response?.ok
		? {
				data: await response.json(),
				request: response,
		  }
		: Promise.reject(response)
}
