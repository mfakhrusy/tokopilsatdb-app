import {
  GET_LIST,
  GET_ONE,
  CREATE,
  fetchUtils,
} from 'react-admin';

import { apiUrl } from 'config/config';

const convertDataProviderToRequestHTTP = (type, resource, params) => {
  switch (type) {
  case GET_LIST: {
    return { url: `${apiUrl}/${resource}` };
  }
  case GET_ONE: {
    return { url: `${apiUrl}/${resource}/${params.id}` };
  }
  case CREATE: {
    const data = new FormData();

    data.append('file', params.data.image.rawFile);
    data.append('label', params.data.label);
    return {
      url: `${apiUrl}/${resource}/add`,
      options: {
        method: 'POST',
        body: data,
      },
    };
  }
  default:
    throw new Error(`Unsupported fetch action type ${type}`);
  }
};

const convertHTTPResponseToDataProvider = (response, type, resource, params) => {
  const { headers, json } = response;
  switch (type) {
  case GET_LIST: {
    return {
      data: json.data.map((x) => x),
      total: json.data.length,
    };
  }
  case GET_ONE: {
    return {
      data: json.data,
    };
  }
  case CREATE: {
    console.log(json);
    return {
      data: json.data,
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
