import { GET_LIST, fetchUtils } from 'react-admin';

import { apiUrl } from 'config/config';

const convertDataProviderToRequestHTTP = (type, resource, params) => {
  switch (type) {
  case GET_LIST: {
    console.log('data to http', resource, type);
    return { url: `${apiUrl}/${resource}` };
  }
  default:
    throw new Error(`Unsupported fetch action type ${type}`);
  }
};

const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
  const { headers, json } = response;
  console.log(json)
  switch (type) {
  case GET_LIST: {
    return {
      data: json.data.map((x) => ({ ...x, id: x.collection_id })),
      total: json.data.length,
    };
  }
  default:
    return { data: json.data };
  }
};

export default (type, resource, params) => {
  const { fetchJson } = fetchUtils;

  const { url, options } = convertDataProviderToRequestHTTP(type, resource, params);
  return fetchJson(url, options)
    .then((response) => convertHTTPResponseToDataProvider(response, type, resource, params));
};
