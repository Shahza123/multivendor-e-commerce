export default function generateSlug(title) {
  const slug = title
    .toLowerCase() // Convert the title to lowercase
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/[^\w\-]+/g, "") // Remove non-word characters except dashes
    .replace(/\-\-+/g, "-") // Replace multiple consecutive dashes with a single dash
    .replace(/^\-+/, "") // Remove dashes from the beginning
    .replace(/\-+$/, ""); // Remove dashes from the end

  return slug;
}
export function generateUserCode(prefix, name) {
  // Remove spaces and make name uppercase
  const formattedName = name.trim().toUpperCase().replace(/\s+/g, "");

  // Generate a random number to ensure uniqueness
  const randomNumber = Math.floor(1000 + Math.random() * 9000); // 4-digit random number

  // Combine prefix, formatted name, and random number
  return `${prefix}-${formattedName}-${randomNumber}`;
}
