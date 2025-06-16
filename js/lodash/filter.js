const countries = [
    { label: 'Ukraine' },
    { label: 'Sweden' },
    { label: 'USA' },
    { label: 'Canada' },
    { label: 'Mexico' },
    { label: 'Italy' },
    { label: 'England' },
    { label: 'Poland' },
    { label: 'France' },
    { label: 'Scotland' },
    { label: 'Norway' },
    { label: 'Spain' },
    { label: 'Germany' },
  ];

const refs = {
    input: document.querySelector('#input'),
    list: document.querySelector('.js-list')
};

// refs.input.addEventListener('input', onFilterChange);
refs.input.addEventListener('input', _.debounce(onFilterChange, 1000));

function CreateListItemsMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join(' ');
}

function onFilterChange(event) {
    const filterSearch = event.target.value.toLowerCase();

    const filteredItems = countries.filter(country => country.label.toLowerCase().includes(filterSearch));
    console.log(filteredItems)
    const listFilteredItemsMarkup = CreateListItemsMarkup(filteredItems);

    refs.list.innerHTML = listFilteredItemsMarkup;
}