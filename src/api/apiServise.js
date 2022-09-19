import axios from "axios";

export async function getAllItems(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getById(url, id) {
  try {
    const response = await axios.get(url,{
      params:{
        id: id
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function create(url, data) {
  try {
    const res = await axios.post(url, data);
    return res.statusText;

  } catch (error) {
    
    throw error;
  }
}
export async function deletes(url, id) {
  try {
    const res = await axios.delete(`${url}/${id}`);
    return res.statusText;

  } catch (error) {
    
    throw error;
  }
}
export async function update(url, id, body){
  try{
    const res = await axios.put(`${url}/${id}`, body)
    return res.statusText;
  } catch(error){
    throw error;
  }
}
