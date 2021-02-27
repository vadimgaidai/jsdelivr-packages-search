/* eslint-disable import/prefer-default-export */
import { stringify } from 'query-string'

const { VUE_APP_API_URL } = process.env

export const request = async ({ url, data, method = 'GET', params, options }) => {
	const response = await fetch(`${VUE_APP_API_URL}${url}${stringify(params)}`, {
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
