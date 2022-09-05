import httpMocks, { RequestOptions, ResponseOptions } from 'node-mocks-http';

/**
 * Create a mock request and response object (`req`, `res`) that can be passed to an HTTP handler.
 * Use the response object to assert what the handler did for the request.
 **/
export const mockRequest = (
  reqOptions?: RequestOptions,
  resOptions?: ResponseOptions,
) => {
  const req = httpMocks.createRequest(reqOptions);
  const res = httpMocks.createResponse(resOptions);
  return { req, res };
};
