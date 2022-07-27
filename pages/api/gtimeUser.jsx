import React, { useState, useEffect } from 'react';
import { useUser, getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async function gtimeSummaries(req, res) {
    const { user } = useUser();
    res.status(200).json(user);
});