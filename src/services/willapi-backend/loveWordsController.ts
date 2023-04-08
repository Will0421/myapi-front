// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getLoveWordsByPost POST /api/words/love */
export async function getLoveWordsByPostUsingPOST(
  body: API.LoveWords,
  options?: { [key: string]: any },
) {
  return request<string>('/api/words/love', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
