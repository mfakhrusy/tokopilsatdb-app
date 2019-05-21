import {
  GET_LIST,
  GET_ONE,
  CREATE,
  DELETE,
  UPDATE,
  fetchUtils,
} from 'react-admin';

import { apiUrl } from 'config/config';
import { underscoreCaseToCamelCase } from 'helpers/string';

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

    const arrData = Object.keys(params.data);

    arrData.forEach((item) => {
      if (item === 'image') {
        data.append('file', params.data[item].rawFile);
      } else {
        data.append(underscoreCaseToCamelCase(item), params.data[item]);
      }
    });

    return {
      url: `${apiUrl}/${resource}/add`,
      options: {
        method: 'POST',
        body: data,
      },
    };
  }
  case UPDATE: {
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
  case DELETE: {
    return {
      url: `${apiUrl}/${resource}/${params.id}`,
      options: { method: 'DELETE' },
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
