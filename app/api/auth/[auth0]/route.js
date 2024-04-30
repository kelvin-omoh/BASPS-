// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = handleAuth(async (req, res) => {

});
