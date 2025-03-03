import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, this is the users API" });
}

/**
 * Handles POST requests to create a new user.
 * @param {Request} request - The incoming request object containing user data.
 * @returns {Response} - A JSON response with a message and the created user data.
 */
export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ message: "User created", data: body });
}