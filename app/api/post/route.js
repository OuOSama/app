import admin from "@/app/Firebase/adminFirebase";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { collectionName, docData } = await req.json();
    await admin.firestore().collection(collectionName).add(docData);
    return NextResponse.json({
      message: "server got data and send to database success!",
    });
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.json(
      { message: "Failed to process document", error: error.message },
      { status: 500 }
    );
  }
}
