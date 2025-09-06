import { db } from "@/db";
import { certification } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  _: Request,
  context: { params: Promise<{ category: string }> }
) {
  try {
    // Get and validate category
    const categoryParam = (await context.params).category;
    if (!categoryParam) {
      return NextResponse.json(
        { success: false, error: "Category is required" },
        { status: 400 }
      );
    }

    const category = decodeURIComponent(categoryParam);
    if (!category) {
      return NextResponse.json(
        { success: false, error: "Invalid category" },
        { status: 400 }
      );
    }

    // Destructure fields for better readability
    const { title, price, id, thumbnailLink, currencyCode } = certification;

    // Get certifications and total count in parallel
    const certifications = await db
      .select({ title, price, id, thumbnailLink, currencyCode })
      .from(certification)
      .where(eq(certification.category, category));

    // Handle no results found
    if (certifications.length === 0) {
      return NextResponse.json(
        {
          success: true,
          info: [],
        },
        { status: 200 }
      );
    }

    return NextResponse.json({
      success: true,
      info: certifications,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
