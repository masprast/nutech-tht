const getBannerList = () => {
	return {
		name: "getBannerList",
		text: "SELECT * FROM banners",
		values: [],
	};
};

const getService = (name: string) => {
	return {
		name: "getService",
		text: "SELECT * FROM services WHERE name = $1",
		values: [name],
	};
};

export default { getBannerList, getService };
