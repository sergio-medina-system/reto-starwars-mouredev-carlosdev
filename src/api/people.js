export async function getPeople(page) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new NetworkError();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function getCharacter(id = 1) {
  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}/`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function searchCharacter(name) {
  try {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${name}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error");
  }
}
