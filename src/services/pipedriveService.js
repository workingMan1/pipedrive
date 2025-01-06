import axios from 'axios';

const api = axios.create({
    baseURL: process.env.VUE_APP_PIPEDRIVE_API_URL,
    params: {
        api_token: process.env.VUE_APP_PIPEDRIVE_API_TOKEN
    }
});

export const getDeals = (pipelineId) => {
    return api.get('/deals', {
        params: { pipeline_id: pipelineId }
    });
};

export const getDealDetails = (dealId) => {
    return api.get(`/deals/${dealId}`);
};