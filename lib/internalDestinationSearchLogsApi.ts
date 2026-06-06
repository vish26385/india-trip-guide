// export type DestinationSearchLogItem = {
//   id: number;
//   searchText: string;
//   searchSlug: string;
//   searchCount: number;
//   firstSearchedAtUtc: string;
//   lastSearchedAtUtc: string;
//   isIgnored: boolean;
//   isAddedToDestination: boolean;
//   reviewNote?: string | null;
// };

// const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// export async function getTopFailedDestinationSearches(key: string) {
//   const response = await fetch(
//     `${baseUrl}/api/internal/destination-search-logs/top-failed?take=100`,
//     {
//       cache: "no-store",
//       headers: {
//         "X-Internal-Report-Key": key,
//       },
//     }
//   );

//   if (!response.ok) {
//     throw new Error("Unauthorized or failed to load report.");
//   }

//   return response.json() as Promise<DestinationSearchLogItem[]>;
// }

// export async function ignoreDestinationSearchLog(id: number, key: string) {
//   await fetch(`${baseUrl}/api/internal/destination-search-logs/${id}/ignore`, {
//     method: "POST",
//     headers: {
//       "X-Internal-Report-Key": key,
//     },
//   });
// }

// export async function markDestinationSearchLogAdded(id: number, key: string) {
//   await fetch(
//     `${baseUrl}/api/internal/destination-search-logs/${id}/mark-added`,
//     {
//       method: "POST",
//       headers: {
//         "X-Internal-Report-Key": key,
//       },
//     }
//   );
// }

export type DestinationSearchLogItem = {
  id: number;
  searchText: string;
  searchSlug: string;
  searchCount: number;
  firstSearchedAtUtc: string;
  lastSearchedAtUtc: string;
  isIgnored: boolean;
  isAddedToDestination: boolean;
  reviewNote?: string | null;
};

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

function getHeaders(key: string) {
  return {
    "X-Internal-Report-Key": key.trim(),
  };
}

export async function getTopFailedDestinationSearches(key: string) {
  const response = await fetch(
    `${baseUrl}/api/internal/destination-search-logs/top-failed?take=100`,
    {
      cache: "no-store",
      headers: getHeaders(key),
    }
  );

  if (!response.ok) {
    throw new Error("Unauthorized or failed to load report.");
  }

  return response.json() as Promise<DestinationSearchLogItem[]>;
}

export async function ignoreDestinationSearchLog(id: number, key: string) {
  await fetch(`${baseUrl}/api/internal/destination-search-logs/${id}/ignore`, {
    method: "POST",
    headers: getHeaders(key),
  });
}

export async function markDestinationSearchLogAdded(id: number, key: string) {
  await fetch(
    `${baseUrl}/api/internal/destination-search-logs/${id}/mark-added`,
    {
      method: "POST",
      headers: getHeaders(key),
    }
  );
}