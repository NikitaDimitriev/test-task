import * as types from './types';

export default {

    async getData() {
        context.commit(types.GET_DATA, [])
        try {
            // const url = ``;

            // const response = await this.app.$axios.get(url, { params: query });

            // context.commit(types.GET_DEFAULT_STATUSES, response.data);
            
        } catch (error) {
            
        }
    }
}
