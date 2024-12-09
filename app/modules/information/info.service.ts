import repo from "./info.repository";

async function getBannerList() {
	const bannerList = await repo.getBanner();
	return bannerList;
}

async function getService(name: string) {
	const service = await repo.getService(name);
	return service;
}

export default { getBannerList, getService };
