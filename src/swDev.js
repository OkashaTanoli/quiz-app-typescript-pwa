const swDev = () => {
    let Url = `${process.env.PUBLIC_URL}/service-worker.js`
    navigator.serviceWorker.register(Url).then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default swDev