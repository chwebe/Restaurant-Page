function createMenu() {
    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    const menuTitle = document.createElement('h1');
    menuTitle.textContent = "Our Delicious Menu";
    menuTitle.classList.add('menu-title');

    const menuItems = [
        {
            name: "Southern Fried Chicken",
            description: "Crispy, juicy chicken marinated in buttermilk, coated with our special blend of herbs and spices, then fried to golden perfection. Served with honey butter.",
            price: "$16.99",
            category: "Main Course"
        },
        {
            name: "Creamy Mashed Potatoes",
            description: "Smooth and buttery mashed potatoes made with Yukon Gold potatoes, heavy cream, and fresh herbs.",
            price: "$5.99",
            category: "Sides"
        },
        {
            name: "Southern Style Coleslaw",
            description: "Fresh cabbage, carrots, and onions tossed in our homemade creamy dressing.",
            price: "$4.99",
            category: "Sides"
        },
        {
            name: "Buttermilk Biscuits",
            description: "Flaky, buttery biscuits served warm with honey butter.",
            price: "$3.99",
            category: "Sides"
        },
        {
            name: "Sweet Tea",
            description: "Classic Southern sweet tea brewed fresh daily.",
            price: "$2.99",
            category: "Beverages"
        }
    ];

    // Create menu sections
    const categories = [...new Set(menuItems.map(item => item.category))];
    
    categories.forEach(category => {
        const categorySection = document.createElement('div');
        categorySection.classList.add('menu-section');
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        categoryTitle.classList.add('category-title');
        categorySection.appendChild(categoryTitle);

        const categoryItems = menuItems.filter(item => item.category === category);
        categoryItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;
            itemName.classList.add('item-name');

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;
            itemDescription.classList.add('item-description');

            const itemPrice = document.createElement('span');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('item-price');

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDescription);
            menuItem.appendChild(itemPrice);
            categorySection.appendChild(menuItem);
        });

        menuContent.appendChild(categorySection);
    });

    menuContent.insertBefore(menuTitle, menuContent.firstChild);
    return menuContent;
}

function loadMenu() {
    const main = document.getElementById('content');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;
