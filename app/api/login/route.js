import { NextResponse } from "next/server";

export async function POST(req) {
    const { username, password } = await req.json();
    if (username == 'ouosama' && password == '123456') {
        return NextResponse.json({ status: `ok you can pass mr.${username} oh you password is ${password}` })
    }
    return NextResponse.json({ status: `huh? who are you bro` })
}