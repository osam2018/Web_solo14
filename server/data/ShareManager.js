import axios from 'axios'
const SHARE_LIST_LINK = "http://127.0.0.1:12010/api/shareList" 
export default {
    fetchShareList(){ 
        return axios.get(SHARE_LIST_LINK).then(response=>{ 
            return response.data
        })
    }
}