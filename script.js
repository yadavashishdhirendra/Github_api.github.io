var form = document.getElementById("myform")


form.addEventListener('submit', function (e) {
    e.preventDefault()

    var search = document.getElementById("search").value

    var originalName = search.split(' ').join('')

    // document.getElementById("result").innerHTML = ""

    // alert(originalName)

    fetch("https://api.github.com/users/" + originalName)
        .then((results) => results.json())
        .then((datas) => {
            console.log(datas)

            document.getElementById("result").innerHTML = `
           <img style="border-radius: 50%;width: 30%; background-position: center;" src="${datas.avatar_url}" />
           <a target="_blank" href="https://www.github.com/${originalName}"><h1>${datas.name}</h1></a>
            `
        })
})