const sharp = require('sharp');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
  <circle cx="24" cy="24" r="22" fill="#fffde6" stroke="#f0eec7" stroke-width="2" />
  <g transform="translate(12,12) scale(1.0)">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
         viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 2h4"/>
      <path d="M12 14v-4"/>
      <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/>
      <path d="M9 17H4v5"/>
    </svg>
  </g>
</svg>
`;

const sizes = [16, 48, 128];

sizes.forEach((size) => {
  sharp(Buffer.from(svg))
    .resize(size, size)
    .png()
    .toFile(`img/logo-${size}.png`)
    .then(() => console.log(`created logo-${size}.png`))
    .catch((err) => console.error(`failed for size ${size}:`, err));
});
