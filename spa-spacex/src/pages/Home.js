import getData from '../utils/getData';

const Home = async () => {

    const lands = await getData();

    const view = `
      <div class="lands">
        ${lands.map(land => `
          <article class="lands-item">
            <a href="#/${land.id}">
              <img src="${land.links.patch.small}" alt="${land.name}">
              <h2>${land.name}</h2>
            </a>
          </article>
        `).join('')}
      </div>
    `;

    return view;
  
};

export default Home;
