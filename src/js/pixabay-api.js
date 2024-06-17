export function fetchPhotos(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const END_POINT = '';
  const params = new URLSearchParams({
    key: '44424837-77c152bfba29e6a878f792266',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(err => console.log('Error fetching photos:', err));
}
