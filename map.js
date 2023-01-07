let data = [
  {nama: "agung", umur:21},
  {nama: "hendra", umur:23},
{nama: "endrik",  umur:22},
{nama: "samsul", umur:40}
]

var newdata = data.map(m => {
  return {
    name : m.nama,
    number: m.umur * m.nama.length
    
  }
})
console.log(newdata)
