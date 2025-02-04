import { NextResponse } from "next/server";
import { client } from "../../../lib/sanity";

const query = `*[_type == "Author"]{
  name, 
  surname
}`;

export async function GET() {
  try {
    const persons = await client.fetch(query);
    return NextResponse.json(persons);
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch data', ${error}` },
      { status: 500 }
    );
  }
}
