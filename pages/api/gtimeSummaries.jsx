import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function gtimeSummaries(req, res) {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant
  const { accessToken } = await getAccessToken(req, res, {});
  const response = await fetch('https://siemens.gtime.io/gtime/summaries', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
  const summaries = await response.json();
  console.table(summaries);
  res.status(200).json(summaries);
});