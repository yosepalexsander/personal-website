// initialize empty array
let blogs = []

// add blog (done)
function addBlog(e) {
  // steps
  // 1. get input value and make validation
  // 2. initialize object blog
  // 3. store blog object to array

  // prevent page refreshing
  e.preventDefault()

  let title = document.getElementById('input-blog-title').value
  let content = document.getElementById('input-blog-content').value
  let image = document.getElementById('input-blog-image')

  if (!title || !content || !image.value) {
    alert('all input fields must be not empty')
  } else {
    // catch image files and create img url
    let imageURL = URL.createObjectURL(image.files[0])

    // make object
    let blog = {
      author: 'Nur Dewi',
      title: title,
      content: content,
      image: imageURL,
      postedAt: new Date()
    }

    // store blog data to array
    blogs.push(blog)

    //invoke function for display data after add
    displayBlog()
  }

}


// display blog to HTML

// 1. get container element 
// 2. looping
// 3. make HTML element and append inside container element

function displayBlog() {
  console.table(blogs)

  let blogContainer = document.getElementById('contents')
  blogContainer.innerHTML = ""

  for (let i = 0; i < blogs.length; i++) {
    console.log(blogs[i])

    // concat element and inject to blog container using innerHTML
    blogContainer.innerHTML += `
      <div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank"
              >${blogs[i].title}</a
            >
          </h1>
          <div class="detail-blog-content">
            ${blogs[i].postedAt} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>
        </div>
      </div>
    `
  }
}