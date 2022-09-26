import axios from 'axios'


export const api = axios.create({
    baseURL: 'https://reqres.in/api/'
});

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        try{
        const response = await api.post('/login', {email: email, password: password})
        return response.data;

        }catch (erro) {
            return null;
        }
    }
})

