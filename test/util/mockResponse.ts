import { BASE_URL } from '@config/app';
import nock from 'nock';

type Args = {
  path: string;
  response: nock.Body;
  method?: 'GET' | 'POST' | 'PUT' | 'OPTIONS';
  body?: nock.Body;
  baseUrl?: string;
  error?: string;
  statusCode?: number;
};

/**
 * Intercept a matching HTTP request and return a mocked response.
 */
export const mockResponse = ({
  path,
  response,
  method = undefined,
  body = undefined,
  baseUrl = BASE_URL,
  statusCode = 200,
}: Args) => {
  method ||= body ? 'POST' : 'GET';
  const mock = nock(baseUrl)
    .intercept(path, method, body)
    .reply(statusCode, response);
  return { mock, path, response: response as any, url: baseUrl + path };
};
