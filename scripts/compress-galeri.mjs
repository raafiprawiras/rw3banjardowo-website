import { readdirSync, statSync, renameSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/assets/galeri';
const files = readdirSync(DIR).filter((f) => /\.jpg$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
    const src = join(DIR, file);
    const before = statSync(src).size;
    totalBefore += before;

    const name = file.replace(/\.jpg$/i, '');
    const base = sharp(src).rotate();

    await base
        .clone()
        .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 82, mozjpeg: true, progressive: true })
        .toFile(join(DIR, `${name}.tmp.jpg`));

    await base
        .clone()
        .resize({ width: 800, height: 800, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 76 })
        .toFile(join(DIR, `${name}-thumb.webp`));

    renameSync(join(DIR, `${name}.tmp.jpg`), src);

    const after = statSync(src).size;
    totalAfter += after;
    console.log(`${file}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB (thumb added)`);
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ${(totalAfter / 1024 / 1024).toFixed(1)} MB`);
