export const revalidate = 60 * 10; // 10 mins

export async function GET() {
  return Response.json({
    mapToken: process.env.MAPBOX_TOKEN
  })
}