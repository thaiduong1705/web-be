const slugify = require("slugify");
const uniqueSlug = require("unique-slug");

const createSlug = (title) => {
    if (!title) return null;
    const slugString = slugify(title, {
        replacement: "-",
        lower: true,
        locale: "vi",
    });
    const uniqueHex = uniqueSlug();
    return slugString + "-" + uniqueHex;
};

module.exports = createSlug;
