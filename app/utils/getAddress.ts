import axios from 'axios';

const URL_API_GET_ADDRESS = 'https://geoapi.heartrails.com/api/json';

const getPrefecturesByArea = (area: string, callback: (data: any) => void) => {
    axios({
        method: 'GET',
        url: `${URL_API_GET_ADDRESS}?method=getPrefectures&area=${area}`
    })
    .then((response) => {
        callback(response?.data?.response);
    })
    .catch(() => {
        callback(null);
    });
};

const onGetCitiesByPrefecture = (area: string, prefecture: string, callback: (data: any) => void) => {
    axios({
        method: 'GET',
        url: `${URL_API_GET_ADDRESS}?method=getCities&area=${area}&prefecture=${prefecture}`
    })
    .then((response) => {
        callback(response?.data?.response);
    })
    .catch(() => {
        callback(null);
    });
};

const onGetTownsByCity = (city: string, prefecture: string, callback: (data: any) => void) => {
    axios({
        method: 'GET',
        url: `${URL_API_GET_ADDRESS}?method=getTowns&city=${city}&prefecture=${prefecture}`
    })
    .then((response) => {
        callback(response?.data?.response);
    })
    .catch(() => {
        callback(null);
    });
};

const onSearchAddressByPostcode = async (postcode: string, isResponse: boolean) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${URL_API_GET_ADDRESS}?method=searchByPostal&postal=${postcode}`
        });
        
        const data = response?.data?.response;
        if (data) {
            if (!isResponse) {
                const dataAddress = data?.location;
                if (dataAddress && dataAddress.length > 0) {
                    const address = dataAddress[0];
                    return `${address.prefecture}${address.city}${address.town}`;
                }
            } else {
                const dataAddress = data?.location;
                return dataAddress && dataAddress.length > 0 ? dataAddress[0] : null;
            }
        }
        return isResponse ? null : '';
    } catch (error) {
        return isResponse ? null : '';
    }
};

const onSearchPostcodeByAddress = async (address: string, isResponse = false) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${URL_API_GET_ADDRESS}?method=suggest&matching=suffix&keyword=${address}`
        });

        const data = response?.data?.response;
        if (data) {
            const dataAddress = data?.location;
            if (dataAddress && dataAddress.length > 0) {
                const addr = dataAddress[0];
                return !isResponse ? addr?.postal || '' : addr;
            }
        }
        return !isResponse ? '' : null;
    } catch (error) {
        return !isResponse ? '' : null;
    }
};

export {
    getPrefecturesByArea,
    onGetCitiesByPrefecture,
    onGetTownsByCity,
    onSearchAddressByPostcode,
    onSearchPostcodeByAddress
};
