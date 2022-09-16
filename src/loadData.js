export const getData = async () => {
    const data = await fetch("https://api-moscow-mba.herokuapp.com/products")
      .then((res) => res.json())

    return data
}