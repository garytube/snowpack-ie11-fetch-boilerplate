import 'whatwg-fetch'


async function start() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await response.json()
  console.log(response.headers.get('Content-Type'))
  console.log(response.headers.get('Date'))
  console.log(response.status)
  console.log(response.statusText)
  document.querySelector('code').innerHTML = JSON.stringify(data, null, 2)
}



start()