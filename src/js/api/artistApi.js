import axios from "axios";

export default async function ArtistInfo (data) {
  const url = `https://api.spotify.com/v1/artists/${data}`;
  // const ctr = `${cent}` 
  const auth = 'BQBrLz5B6rORmr-sZdP8ARsdRAbhpvE2ng_WCQZK9kRg3ip_5ElMxouk2i3mz1OsQV2Z_MtQqmjOEjGgCULQ1ODoUSxZ7RCwaefP3RRNXZ0_Th_HITaf';
  const token = `Bearer ${auth}`;

  try {
    const res =  await axios.get(url, {
      headers: {
        Authorization: token
      }
    });
  
    return res.data;
  } catch (err) {
    alert('tq');
  }
}
