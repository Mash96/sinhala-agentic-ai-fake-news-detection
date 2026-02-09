test('frontend request does not include API key', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ ok: true, json: () => Promise.resolve({}) })
  );

  await checkClaim(); // or whatever triggers the request

  const fetchCall = fetch.mock.calls[0];
  const requestBody = JSON.parse(fetchCall[1].body);

  expect(requestBody.openrouter_api_key).toBeUndefined();
});