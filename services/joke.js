// Fetches data from the '/api/joke' endpoint using a GET request
export async function getData() {
  const response = await fetch('/api/joke', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  // Throw an error if the request fails
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data.data[0]; // Return the first item from the response data
}

// Sends data to the '/api/joke' endpoint using a POST request
export async function sendData(info) {
  const response = await fetch('/api/joke', {
    method: 'POST',
    body: JSON.stringify(info),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  // Throw an error if the request fails
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

// Deletes data from the '/api/joke' endpoint using a DELETE request
export async function deleteData(id) {
  const response = await fetch('/api/joke', {
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  // Throw an error if the request fails
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}