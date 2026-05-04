import React, { useEffect, useMemo, useState } from 'react'
import './FilterSideBar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/productSlice';

const FilterSideBar = () => {
    const dispatch = useDispatch()
    const { products, filters } = useSelector(state => state.products)

    const [searchTerm, setSearchTerm] = useState(filters.search)

    // Category buttons logic
    const categories = useMemo(() => {
        if (!products.length) return ['all']
        return ['all', ...new Set(products.map(p => p.category))]
    }, [products])


    //DEBOUNCE Effect
    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setFilter({ name: 'search', value: searchTerm }))
        }, 500)
        return () => clearTimeout(timer)
    }, [searchTerm, dispatch])


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'search') {
            setSearchTerm(value)
        } else {
            dispatch(setFilter({ name, value }))
        }
    }

    return (
        <aside className="sidebar">
            {/* Enhanced Search Section / Gelişmiş Arama Bölümü */}
            <div className="filter-group">
                <label htmlFor="search-input" className="filter-label">Ürün Ara</label>
                <div className="search-container">
                    <input
                        type="text"
                        id="search-input"
                        name="search"
                        className="search-input"
                        placeholder="Ürün adı, marka..."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* Categories / Kategoriler */}
            <div className="filter-group">
                <h3 className="filter-title">Kategoriler</h3>
                <ul className="category-list">
                    {categories.map(cat => (
                        <li
                            key={cat}
                            className={`category-item ${filters.category === cat ? 'active' : ''}`}
                            onClick={() => dispatch(setFilter({ name: 'category', value: cat }))}
                        >
                            {cat}
                        </li>
                    ))}

                </ul>
            </div>

            {/* Sorting / Sıralama */}
            <div className="filter-group">
                <label htmlFor="price-sort" className="filter-label">Sıralama</label>
                <select id="price-sort" className="sort-select" name='sort' value={filters.sort} onChange={handleChange} >
                    <option value="default">Önerilen</option>
                    <option value="price-asc">En Düşük Fiyat</option>
                    <option value="price-desc">En Yüksek Fiyat</option>
                </select>
            </div>
        </aside>
    );

}

export default FilterSideBar