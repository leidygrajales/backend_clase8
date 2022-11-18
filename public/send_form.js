const send_data = (form) => {
  const name = form.name.value
  const price = form.price.value
  const thumbnail = form.thumbnail.value

  const data = {
    name,
    price,
    thumbnail
  }

  fetch('/api/productos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      alert(`Id insertado: ${data.inserted_id}`)
    })

  return false
}
