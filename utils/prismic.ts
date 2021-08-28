/** Queries */
export async function query(query: (prismic) => any, options?: QueryOptions) {
  const api = await Prismic.getApi(
      `https://${process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT}.cdn.prismic.io/api/v2`,
      { accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN }
    ),
    result = await api.query(query(Prismic), {
      ref: api.masterRef.ref,
      pageSize: 100,
      ...options,
    });

  if (!result) {
    throw new Error("Unpublished document");
  }

  return result.results_size === 1
    ? (result.results[0] as any)
    : (result.results as any);
}
