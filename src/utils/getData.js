import Axios from 'axios'

export default async function getData() {

    let response = await Axios.get("")
    .then(ress => {
        return ress
    })
    .catch(err => {
        return err
    })

  return response
}
