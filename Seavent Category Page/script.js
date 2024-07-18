const categoryTitles = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

categoryTitles.forEach(title => {
    title.addEventListener('click', () => {
        filterPosts(title);
    });
});

function filterPosts(selectedTitle) {
    categoryTitles.forEach(title => title.classList.remove('active'));
    selectedTitle.classList.add('active');

    const selectedCategory = selectedTitle.id;

    allCategoryPosts.forEach(post => {
        if (selectedCategory === 'all' || post.classList.contains(selectedCategory)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
