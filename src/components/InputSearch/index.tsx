import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import "../../Reset.css";
import "../../App.css";

const InputSearch = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="searchPage">
      <div className="searchContainer">
        <button className="backButton" onClick={() => navigate("/")}>
          <ChevronLeftIcon />
        </button>
        <input
          ref={searchInputRef}
          type="text"
          className="searchInput"
          placeholder="Busque por filmes..."
        />
      </div>
    </div>
  );
};
export default InputSearch;
