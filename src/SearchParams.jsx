import { useState } from "react";

const [location , updateLocation] = useState("");

const SearchParams = () => {
    const location = "Seattle, WA";
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={(e) => updateLocation(e.target.value)} />
                </label>
            </form>    
        </div>
    );
}

export default SearchParams;