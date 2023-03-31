import PocketBase from 'pocketbase';

const pbUrl = process.env.React_App_PB_Url;
const pb = new PocketBase(pbUrl);

export default pb;