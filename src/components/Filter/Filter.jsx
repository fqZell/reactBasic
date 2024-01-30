import filter from "../../../public/icons/filter.svg"
import "./Filter.css"

export default function Filter() {
    return (
        <>
        
        <img src={filter} alt="filter" />

        <div className="select">
            <label htmlFor="filter"></label>
            <select name="filter">
                <option value="popular">По популярности</option>
                <option value="price">По цене</option>
                <option value="name">По наименованию</option>
            </select>
        </div>
        
        </>
    )
}