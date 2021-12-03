//1. membuat sebuah fungsi untuk melakukan submit data
//2. tangkap nilai dari setiap elemen input di html
//3. tampilkan nilai tersebut
//4. validasi input: semua input tidak boleh kosong
//5. Jika validasi lulus maka kita akan membuat logic untuk mengirim email

function submitData() {
  // di dalam fungsi adalah logic atau tugas yang akan dilakukan
  console.log('function dieksekusi')

  // DOM: Document Object Modeling
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value
  let subject = document.getElementById('subject').value
  let message = document.getElementById('message').value

  // validation
  if(name == "") {
    alert('input name must not be empty')
  } else if(email == "") {
    alert('input email must not be empty')
  } else if(phone == "") {
    alert('input phone must not be empty')
  } else if(subject == "") {
    alert('input subject must not be empty')
  } else if(message == "") {
    alert('input message must not be empty')
  } else {

    // store user data to object
    let dataObject = {
      name: name,
      email: email,
      phoneNumber: phone,
      subject: subject,
      message: message
    }
    console.log(dataObject)

    // buat elemen a
    let a = document.createElement('a')
    // beri nilai pada atribut href
    a.href = "mailto:yosepalexsander9@gmail.com?subject=" + subject + "&body=" + message
    // trigger elemen a untuk click
    a.click()
  }
}