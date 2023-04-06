let token = "d6a39d39f8dc6d495f66a5a2a8448c6e3fdbb14d694f9429"



export const server_calls = {
    get: async () => {
        const response = await fetch(`https://skitter-sponge-zebu.glitch.me/api/drinks`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`,
                'Access-Control-Allow-Origin' : '*',
            },
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://skitter-sponge-zebu.glitch.me/api/drinks`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`,
                'Access-Control-Allow-Origin' : '*',
            },
            body: JSON.stringify(data)
        })


        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://skitter-sponge-zebu.glitch.me/api/drinks/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`,
                'Access-Control-Allow-Origin' : '*',
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://skitter-sponge-zebu.glitch.me/api/drinks/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `bearer ${token}`,
                'Access-Control-Allow-Origin' : '*',
                
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return await response.json();
    },
}