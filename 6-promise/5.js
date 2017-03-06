//实际例子
export function submitOrder(params) {
  return fetch(`${baseurl}json/submitorder.html`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(checkStatus)        //检查状态
  .then(response => {
    return response.json()
  })
}
