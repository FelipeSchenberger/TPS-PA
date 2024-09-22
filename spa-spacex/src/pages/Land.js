import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Land =  async () => {

    const id = getHash();
    const land = await getData(id);
    console.log(land);
    const view = `
        <div class="lands-inner">
            <article class="lands-card">
                <img src="${land.links.patch.small}" alt="${land.name}">
                <h2>${land.name}</h2>
            </article>

            <article class="lands-card">
                <h3>Success:<span> ${land.success}</span></ </h3>
                <h3>Details: <span> ${land.details}</span></h3>
                <h3>Flight Number: <span> ${land.flight_number}</span></</h3>
                <h3>Date: <span> ${land.date_utc}</span></</h3>
            </article>
        </div> 
    `
    return view
};
export default Land;